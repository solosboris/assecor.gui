import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'personsbycolor',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, RouterModule],
  templateUrl: './personsbycolor.html',
  styleUrls: ['../../styles.css']
})
export class Personsbycolor implements OnInit {

  personsDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ["id", "name", "lastName", "zip", "city", "color"];
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const color = this.route.snapshot.paramMap.get('color');
    if (!color) return;

    this.restService.personsByColor(color).subscribe({
      next: (dto) => {
        this.personsDataSource.data = dto.dtos;
        console.info(
          'Personsbycolor.ngOnInit data ' + this.personsDataSource.data.length
        );        
      },
      error: () => {
        this.error = "Failed to load persons by the color";
        console.error('Personsbycolor.ngOnInit error ', this.error);
      }
    });
  }

}