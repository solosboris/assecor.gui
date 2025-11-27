import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'persons-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, RouterModule],
  templateUrl: './person-table.html',
  styleUrls: ['../../styles.css']
})
export class PersonTable implements OnInit {

  personsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restService.allPersons().subscribe({
      next: (dto) => {
        this.personsDataSource.data = dto.dtos;
        console.info(
          'PersonTable.ngOnInit data ' + this.personsDataSource.data.length
        );
      },
      error: () => {
        this.error = "Failed to load all persons";
        console.error('PersonTable.ngOnInit error ', this.error);
      }
    });
  }

}