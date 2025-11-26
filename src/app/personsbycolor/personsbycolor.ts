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
export class Personsbycolor {

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
    var data: any[] = [];
    this.route.params.subscribe(params => {
      var cnt = 1;
      Object.keys(params).forEach(paranName => {
        console.info(cnt + " param name " + paranName + " value " + params[paranName]);
      });
      cnt++;
      const color = params['color'];
      if (color) {
        console.info("color " + color);
        this.restService.personsByColor(color).subscribe({
          next: (dtosContainer) => {
            this.personsDataSource = new MatTableDataSource(
              dtosContainer.dtos
            );
            data = dtosContainer.dtos;
          },
          error: (err) => {
            this.error = 'Failed to load persons by the color ' + color;
            console.error('Error to load persons: ', err);
          }
        });      
      }
    });
    if (data) {
      console.info("personsByColor assigned dtos " + data.length);
    } else {
      console.info("personsByColor dtos 0");
    }
  }

}