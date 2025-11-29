import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RESTService } from '../../services/restservice';
import { PersonDTO } from '../../models/persondto.model';

@Component({
  selector: 'addperson',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './addperson.html',
  styleUrls: ['../../styles.css']
})
export class Addperson implements OnInit {
    
  id: number = -1;
  name: string = '';
  lastName: string = '';
  zip: string = '';
  city: string = '';
  color: string = '';
  person: PersonDTO;
  error: string | null = null;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.person = new PersonDTO();
  }

  ngOnInit(): void {
    console.info('Addperson.ngOnInit');
  }

  addPerson(): void {
    const createPerson = new PersonDTO();
    createPerson.name = this.name;
    createPerson.lastName = this.lastName
    createPerson.zip = this.zip;
    createPerson.city = this.city;
    createPerson.color = this.color;
    console.info('Addperson.addPerson ', createPerson);

    if (this.areValues()) {
      this.restService.addPerson(createPerson).subscribe({    
        next: (person) => {
          this.person = person;
          console.info('Addperson.addPerson response ', this.person);
          if (!isNaN(this.person.id) && this.person.id > 0) {
            // Redirect to the pperson view
            const navigaeToPerson = 'person/' + this.person.id;
            console.info('Addperson.addPerson to ' + navigaeToPerson);
            this.router.navigate([navigaeToPerson]);
          } else {
            console.info(
              'Addperson.addPerson response is failed',
              this.person.id
            );
          }
        },
        error: () => {
          this.error = "Failed to add person";
          console.error('Addperson.addPerson error ', this.error);
          this.router.navigate(['']);
        }
      });
    } else {
      console.info('Addperson.addPerson false params');
    }
  }

  private areValues(): boolean {
    return this.name != null && this.name.length > 0
            && this.lastName != null && this.lastName.length > 0
            && this.zip != null && this.zip.length > 0
            && this.city != null && this.city.length > 0
            && this.color != null && this.color.length > 0;
  }

}