import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { PersonTable } from './app/person-table/person-table';
import { Personsbycolor } from './app/personsbycolor/personsbycolor';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

@NgModule({
  declarations: [
      PersonTable,
      Personsbycolor
  ],
  imports: [
    AppComponent,
    HttpClientModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {}