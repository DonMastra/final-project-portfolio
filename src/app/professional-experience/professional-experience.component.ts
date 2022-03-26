import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.css']
})
export class ProfessionalExperienceComponent implements OnInit {

  constructor(
    private _renderer: Renderer2,
    //@Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
    //let elemento = this._document.getElementById('elementId');
    let script = this._renderer.createElement('script');
    script.type = 'application/javascript';
    script.src = '../../assets/scripts/date-picker.js';
    this._renderer.appendChild(script, document);
  }

}
