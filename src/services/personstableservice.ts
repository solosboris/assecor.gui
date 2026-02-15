import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonDTO } from '../models/persondto.model';

@Injectable({
  providedIn: 'root',
})
export class PersonsTableService {

  personsDataSource = new MatTableDataSource<PersonDTO>();

}
