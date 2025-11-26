import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonTable } from './person-table/person-table';
import { Personsbycolor } from './personsbycolor/personsbycolor';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'persons', component: PersonTable },
    { path: 'color/:color', component: Personsbycolor }
];