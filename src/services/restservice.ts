import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RESTService {

  private baseUrl = '/persons'; // proxi url and suffix
  
  constructor(private http: HttpClient) {}

  allPersons(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }//get all persons; returns DTOsContainer from "../models/dtoscontainer.model";

  personById(personid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${personid}`);
  }//get person by id; returns PersonDTO from "../models/persondto.model";

  personsByColor(color: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/color/${color}`);
  }//get persons by color; returns DTOsContainer from "../models/dtoscontainer.model";

}