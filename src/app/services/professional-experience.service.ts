import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfesionalExperience } from '../models/professionalExperience';

const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})}


@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {

  experienceUrl = 'http://localhost:8080/api/component/experiences';

  constructor(private httpClient: HttpClient) { }

  public getExperiences(): Observable<ProfesionalExperience[]> {

    return this.httpClient.get<ProfesionalExperience[]>(this.experienceUrl + 'list', headers);
  }
}
