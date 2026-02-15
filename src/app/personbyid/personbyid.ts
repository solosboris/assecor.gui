import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Foundpersontable } from '../foundpersontable/foundpersontable';
import { PersonsTableService } from '../../services/personstableservice';
import { RESTService } from '../../services/restservice';

@Component({
  selector: 'app-personbyid',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    Foundpersontable,
    RouterModule
  ],
  templateUrl: './personbyid.html',
  styleUrls: ['../../styles.css']
})
export class Personbyid implements OnInit {
  private restService = inject(RESTService);
  private personsTableService = inject(PersonsTableService);
  private route = inject(ActivatedRoute);


  error: string | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.info('Personbyid.ngOnInit id ', id);
    if (!id) {
      return;
    }
    this.restService.personById(
      parseInt(id)
    ).subscribe({
      next: (dto) => {
        this.personsTableService.personsDataSource.data = [ dto ];
        console.info(
          'Personbyid.ngOnInit data ' +
            this.personsTableService.personsDataSource.data.length
        );
      },
      error: () => {
        this.error = "Failed to load persons by the id";
        console.error('Personbyid.ngOnInit error ', this.error);
      }
    });
  }

}
