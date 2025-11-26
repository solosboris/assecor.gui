// main.server.ts
import 'zone.js/node';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';

async function renderApp(url: string): Promise<string> {
  return renderApplication(async () =>
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
      ],
    }),
    {
      url,
      document: '<!doctype html><html><head></head><body><app-root></app-root></body></html>',
    }
  );
}

// default export for Angular SSR
export default renderApp;