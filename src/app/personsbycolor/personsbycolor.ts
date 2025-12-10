import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Foundpersontable } from '../foundpersontable/foundpersontable';
import { PersonsTableService } from '../../services/personstableservice';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'personsbycolor',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    Foundpersontable,
    RouterModule
  ],
  templateUrl: './personsbycolor.html',
  styleUrls: ['../../styles.css']
})
export class Personsbycolor implements OnInit {

  error: string | null = null;

  constructor(
    private restService: RESTService,
    private personsTableService : PersonsTableService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const color = this.route.snapshot.paramMap.get('color');
    if (!color) return;

    this.restService.personsByColor(color).subscribe({
      next: (dto) => {
        this.personsTableService.personsDataSource.data = dto.dtos;
        console.info(
          'Personsbycolor.ngOnInit data ' +
            this.personsTableService.personsDataSource.data.length
        );        
      },
      error: () => {
        this.error = "Failed to load persons by the color";
        console.error('Personsbycolor.ngOnInit error ', this.error);
      }
    });
  }

}