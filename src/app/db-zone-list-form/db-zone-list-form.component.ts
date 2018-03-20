import {Component, Input, OnInit} from '@angular/core';

import {ZoneListObject} from '../data-modeling/zone-db/zone-list-object';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-db-zone-list-form',
  templateUrl: './db-zone-list-form.component.html',
  styleUrls: ['./db-zone-list-form.component.css']
})
export class DbZoneListFormComponent implements OnInit {

  zoneListObject: ZoneListObject;
  @Input() zoneListForm: FormGroup;

  status = [
    'EDIT',
    'DEPLOYED_DEV',
    'DEPLOYED_MASTER',
    'RELEASED'
  ];

  constructor(private fb: FormBuilder) {
  }

  createForm() {
    if (this.zoneListObject) {

    } else {
      this.zoneListForm = this.fb.group({
        id: null,
        start: null,
        end: null,
        path: null,
        name: null,
        status: null
      });
    }

  }


  ngOnInit() {
    this.createForm();
  }

}
