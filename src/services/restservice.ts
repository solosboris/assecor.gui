import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDTO } from '../models/persondto.model';
import { DTOsContainer } from '../models/dtoscontainer.model';

@Injectable({
  providedIn: 'root',
})
export class RESTService {
  private http = inject(HttpClient);


  private baseUrl = 'http://localhost:8080/persons';

  allPersons(): Observable<DTOsContainer> {
    return this.http.get<DTOsContainer>(`${this.baseUrl}`);
  }//get all persons; returns DTOsContainer from "../models/dtoscontainer.model";

  personById(personid: number): Observable<PersonDTO> {
    console.info(
      'RESTService.personById ',
      `${this.baseUrl}/person/${personid}`
    );
    return this.http.get<PersonDTO>(`${this.baseUrl}/person/${personid}`);
  }//get person by id; returns PersonDTO from "../models/persondto.model";

  personsByColor(color: string): Observable<DTOsContainer> {
    return this.http.get<DTOsContainer>(`${this.baseUrl}/color/${color}`);
  }//get persons by color; returns DTOsContainer from "../models/dtoscontainer.model";

  personsByColorCnt(color: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/colorcounter/${color}`);
  }//get persons count by color; returns int;

  addPerson(person: PersonDTO): Observable<number> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
    });
    console.info('RESTService.addPerson ', person);
    return this.http.post<number>(
      `${this.baseUrl}/person`,
      person,
      { headers }
    );
  }

}
