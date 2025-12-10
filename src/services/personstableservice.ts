import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class PersonsTableService {

  personsDataSource = new MatTableDataSource<any>();  

}