import {Component, OnInit} from '@angular/core';

import {ZoneListObject} from '../data-modeling/zone-db/zone-list-object';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DbZoneRestServiceService} from "../db-zone-rest-service.service";

@Component({
  selector: 'app-db-zone-list-form',
  templateUrl: './db-zone-list-form.component.html',
  styleUrls: ['./db-zone-list-form.component.css']
})
export class DbZoneListFormComponent implements OnInit {

  dbZoneFormObject: ZoneListObject;
  zoneListForm: FormGroup;

  status = [
    'EDIT',
    'DEPLOYED_DEV',
    'DEPLOYED_MASTER',
    'RELEASED'
  ];

  constructor(private fb: FormBuilder,
              private dbZoneService: DbZoneRestServiceService) {
  }

  createForm() {
    console.log(JSON.stringify(this.dbZoneFormObject));
    if (this.dbZoneFormObject) {
      // This is probably an update

    } else {
      // This is a new zone to be saved
      this.zoneListForm = this.fb.group({
        id: null,
        start: null,
        end: null,
        path: null,
        name: null,
        status: 'EDIT'
      });
    }
  }

  onSubmit() {
    console.log(this.zoneListForm.value);
    this.dbZoneService.saveZone(this.zoneListForm.value).subscribe();
  }

  ngOnInit() {
    this.createForm();
  }

}
