import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RESTService } from '../../services/restservice';

@Component({
  standalone: false,
  selector: 'persons-table',
  templateUrl: './person-table.html',
  styleUrl: '../../styles.css'
})
export class PersonTable implements OnInit {

  personsDataSource: MatTableDataSource<any> =
    new MatTableDataSource();
  displayedColumns: string[] = [
   "id",
   "name",
   "lastName",
   "zip",
   "city",
   "color"
  ];
  // Variable to hold error message
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.error = null;
    console.info('all persons');
    this.restService.allPersons().subscribe({
      next: (dtosContainer) => {
        this.personsDataSource = new MatTableDataSource(
          dtosContainer.dtos
        );
      },
      error: (err) => {
        this.error = 'Failed to load all persons';
        console.error('Error to load all persons: ', err);
      }
    });
  }

}