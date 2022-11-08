import { Component, Input, OnInit } from '@angular/core';
import { ProfessionalExperience } from 'src/app/models/professionalExperience';
import { ProfessionalExperienceService } from 'src/app/services/professional-experience.service';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.css']
})
export class ExperiencesListComponent implements OnInit {
  @Input() user?: string;
  experiences: ProfessionalExperience[] = [];

  constructor(
    private experienceService: ProfessionalExperienceService
  ) { }

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.experienceService.getExperiences().subscribe(data => {
      this.experiences = data;
    },(err: any) => {
      console.log(err);
    });
  }

  // TODO: implementar onDelete
  /* onDelete(id: number) {
    if (confirm('¿Estás seguro?')) {
      this.experienceService.delete(id).subscribe(data => {
        this.loadExperiences();
      });
    }
  } */

}
