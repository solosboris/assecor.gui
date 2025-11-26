import { Routes } from '@angular/router';
import { PersonTable } from './person-table/person-table';
import { Personsbycolor } from './personsbycolor/personsbycolor';

export const routes: Routes = [
    { path: '', component: PersonTable },
    { path: 'persons', component: PersonTable },
    { path: 'color/:color', component: Personsbycolor }
];