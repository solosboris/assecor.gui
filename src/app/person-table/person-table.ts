import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'persons-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, RouterModule],
  templateUrl: './person-table.html',
  styleUrls: ['../../styles.css']
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