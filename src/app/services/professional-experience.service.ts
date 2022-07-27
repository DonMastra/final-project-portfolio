import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessionalExperience } from '../models/professionalExperience';

const headers = {headers: new HttpHeaders({'Content-Type': 'application/json'})}


@Injectable({
  providedIn: 'root'
})
export class ProfessionalExperienceService {

  experienceUrl = 'http://localhost:8080/api/exp';

  constructor(private httpClient: HttpClient) { }

  public getExperiences(): Observable<ProfessionalExperience[]> {

    return this.httpClient.get<ProfessionalExperience[]>(this.experienceUrl + '/experiences', headers);
  }
}
