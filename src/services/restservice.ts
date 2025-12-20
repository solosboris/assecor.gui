import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDTO } from '../models/persondto.model';

@Injectable({
  providedIn: 'root',
})
export class RESTService {

  private baseUrl = 'http://localhost:8080/persons'; // proxi url and suffix
  
  constructor(private http: HttpClient) {}

  allPersons(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }//get all persons; returns DTOsContainer from "../models/dtoscontainer.model";

  personById(personid: number): Observable<any> {
    console.info(
      'RESTService.personById ',
      `${this.baseUrl}/person/${personid}`
    );
    return this.http.get(`${this.baseUrl}/person/${personid}`);
  }//get person by id; returns PersonDTO from "../models/persondto.model";

  personsByColor(color: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/color/${color}`);
  }//get persons by color; returns DTOsContainer from "../models/dtoscontainer.model";

  personsByColorCnt(color: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/colorcounter/${color}`);
  }//get persons count by color; returns int;

  addPerson(person: PersonDTO): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
    });
    console.info('RESTService.addPerson ', person);
    return this.http.post(
      `${this.baseUrl}/person`,
      person,
      { headers }
    );
  }

}