import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';

import {ZoneObject} from '../data_modeling/zone_object';


@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})

export class ZoneDetailComponent implements OnInit {
  @ViewChild('mylist')
  private mylist: ElementRef;

  @ViewChild('modform')
  private modform: ElementRef;


  @Input() zoneobject: ZoneObject;

  constructor(private renderer: Renderer2, private element: ElementRef) {
    console.log('cazzu cazzu iuiu');
  }

  createForm(): void {
    console.log('******************************************************');
    console.log('******************************************************');
    // remove list element
    if (this.zoneobject !== undefined) {
      const myelement = this.renderer.selectRootElement('#idlista');
      this.renderer.removeChild(this.mylist.nativeElement, myelement);

      // create form
      const form = this.renderer.createElement('form');

      this.createInputElement('Vnum', this.zoneobject.vnum.toString(), form);
      this.createInputElement('Zone-name', this.zoneobject.zoneName, form);
      this.createInputElement('Top-room-number', this.zoneobject.topRoomNumber.toString(), form);
      this.createInputElement('Lifespan', this.zoneobject.lifeSpan.toString(), form);
      this.createInputElement('ResetMode', this.zoneobject.resetMode.toString(), form);

      this.renderer.appendChild(this.modform.nativeElement, form);
    }


  }

  createInputElement(labelText: string, inputText: string, form: ElementRef) {
    // create form elements
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'form-group');
    const label = this.renderer.createElement('label');
    const input = this.renderer.createElement('input');
    const labelTxt = this.renderer.createText(labelText);

    this.renderer.setAttribute(label, 'for', 'id-' + labelText);
    this.renderer.setAttribute(input, 'value', inputText);
    this.renderer.setAttribute(input, 'id', 'id-' + labelText);

    this.renderer.appendChild(label, labelTxt);
    this.renderer.appendChild(div, label);
    this.renderer.appendChild(div, input);
    this.renderer.appendChild(form, div);
    return div;
  }



  ngOnInit() {

  }

}
