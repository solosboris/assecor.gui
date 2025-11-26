// server.ts
import express from 'express';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const server = express();
const port = process.env['PORT'] || 4000;

// Resolve __dirname in ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve browser static files
server.use(express.static(join(__dirname, 'dist', 'browser')));

async function start() {
  // Import the server bundle using file:// URL (Windows-safe)
  const serverPath = pathToFileURL(join(__dirname, 'dist', 'server', 'main.server.mjs')).href;
  const { renderApp } = await import(serverPath);

  // All routes handled by SSR
  server.get('*', async (req, res) => {
    try {
      const html = await renderApp(req.url);
      res.send(html);
    } catch (err) {
      console.error('Error rendering page:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  server.listen(port, () => {
    console.log(`SSR server running on http://localhost:${port}`);
  });
}

start().catch(err => {
  console.error('Failed to start SSR server:', err);
});