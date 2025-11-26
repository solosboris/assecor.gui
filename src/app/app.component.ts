import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatTableModule, BrowserAnimationsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'Assecor GUI';
}