import {Component, OnInit} from '@angular/core';

import {ZoneListObject} from '../data-modeling/zone-db/zone-list-object';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DbZoneRestServiceService} from "../db-zone-rest-service.service";
import {ZonesComponent} from "../zones/zones.component";

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
              private dbZoneService: DbZoneRestServiceService,
              private zoneComponent: ZonesComponent
  ) {

  }

  createForm() {
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
    return this.dbZoneService.saveListZone(this.zoneListForm.value).subscribe(
      //() => this.zoneComponent.getDbZones()
      () => this.postSubmit()
    );
  }

  postSubmit() {
    this.zoneComponent.getDbZones();
    this.zoneComponent.newZone = false;
  }

  ngOnInit() {
    this.createForm();
  }

}
