import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

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
