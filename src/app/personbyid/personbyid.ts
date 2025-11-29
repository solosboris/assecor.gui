import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'personbyid',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, RouterModule],
  templateUrl: './personbyid.html',
  styleUrls: ['../../styles.css']
})
export class Personbyid implements OnInit {

  personsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.info('Personbyid.ngOnInit id ', id);
    if (!id) return;

    this.restService.personById(
      parseInt(id)
    ).subscribe({
      next: (dto) => {
        this.personsDataSource.data = [ dto ];
        console.info(
          'Personbyid.ngOnInit data ' + this.personsDataSource.data.length
        );        
      },
      error: () => {
        this.error = "Failed to load persons by the id";
        console.error('Personbyid.ngOnInit error ', this.error);
      }
    });
  }

}