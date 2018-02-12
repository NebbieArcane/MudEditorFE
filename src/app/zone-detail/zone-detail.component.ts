import {Component, OnInit, Input} from '@angular/core';

import {ZoneObject} from '../data_modeling/zone_object';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit {

  @Input() zoneobject: ZoneObject;

  constructor() {}

  ngOnInit() {
    console.log('-----------------------------------------------');
    console.log('-----------------------------------------------');
    console.log(this.zoneobject);
    console.log('-----------------------------------------------');
    console.log('-----------------------------------------------');
  }

}
