import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


import {ZoneObject} from '../data-modeling/zones-api/zone-object';

@Component({
	selector: 'app-zone-form',
	templateUrl: './zone-form.component.html',
	styleUrls: ['./zone-form.component.css']
})
export class ZoneFormComponent implements OnInit, OnChanges {

	public title = 'ModZone';

	resetMode = ['Never', 'IfEmpty', 'Always'];

	@Input() zoneObject: ZoneObject;

	zoneForm: FormGroup;


	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	constructor(private fb: FormBuilder) {

	}

	createForm() {
		if (this.zoneObject) {
			console.log(JSON.stringify(ZoneObject));
			this.zoneForm = this.fb.group({
				vNum: this.zoneObject[0].vnum,
				zoneName: this.zoneObject[0].name,
				topRoomNumber: this.zoneObject[0].end,
				lifeSpan: this.zoneObject[0].lifespan,
				resetMode: this.zoneObject[0].resetmode
			});
		} else {
			this.zoneForm = this.fb.group({
				vNum: null,
				zoneName: '',
				topRoomNumber: '',
				lifeSpan: '',
				resetMode: ''
			});
		}

	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['zoneobject']) {
			// this.model = this.zoneObject;
			// console.log(JSON.stringify(this.model));
		}
	}

  ngOnInit() {
    this.createForm();
  }

}
