import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RESTService } from '../../services/restservice';

@Component({
  standalone: false,
  selector: 'personsbycolor',
  templateUrl: './personsbycolor.html',
  styleUrl: '../../styles.css'
})
export class Personsbycolor implements OnInit {

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
    console.info("personsByColor start");
    const color = this.route.snapshot.paramMap.get('color');
    if (!color) {
      console.info("personsByColor no param color");
      return;
    }
    console.info("color ", color);
    this.restService.personsByColor(color).subscribe({
      next: (dtosContainer) => {
        this.personsDataSource.data = dtosContainer.dtos;
        console.info("personsByColor dtos ",
          this.personsDataSource.data.length
        );
      },
      error: (err) => {
        this.error = 'Failed to load persons by the color ' + color;
        console.error('Error to load persons ', err);
      }
    });

    this.personsDataSource = new MatTableDataSource(
      this.personsDataSource.data
    );
    console.info("personsByColor received items ",
      this.personsDataSource.data.length
    );
  }

}