import { Routes } from '@angular/router';
import { Addperson } from './addperson/addperson';
import { Personbyid } from './personbyid/personbyid';
import { PersonTable } from './person-table/person-table';
import { Personsbycolor } from './personsbycolor/personsbycolor';

export const routes: Routes = [
  { path: '', component: PersonTable },
  { path: 'addperson', component: Addperson },
  { path: 'person/:id', component: Personbyid },
  { path: 'color/:color', component: Personsbycolor },
  { path: '**', redirectTo: '' }
];