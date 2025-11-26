import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PersonTable } from './app/person-table/person-table';
import { Personsbycolor } from './app/personsbycolor/personsbycolor';

@NgModule({
  declarations: [
      PersonTable,
      Personsbycolor
  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {}