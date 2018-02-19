import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


import { ZoneObject } from '../data_modeling/zone_object';

@Component({
	selector: 'app-zone-form',
	templateUrl: './zone-form.component.html',
	styleUrls: ['./zone-form.component.css']
})
export class ZoneFormComponent implements OnInit, OnChanges {

	public title = 'ModZone';

	resetMode = [0, 1, 2];

	@Input() zoneObject: ZoneObject;

	model = new ZoneObject(1, 'ciccio', 2, 2, 1);

	zoneForm: FormGroup;


	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	constructor(private fb: FormBuilder) {

	}

	createForm() {
		if (this.zoneObject) {
			this.zoneForm = this.fb.group({
				vNum: this.zoneObject.vnum || null,
				zoneName: this.zoneObject.zoneName || '',
				topRoomNumber: this.zoneObject.topRoomNumber || null,
				lifeSpan: this.zoneObject.lifeSpan || null,
				resetMode: this.zoneObject.resetMode || ''
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
			this.model = this.zoneObject;
			console.log(JSON.stringify(this.model));
		}
	}

	ngOnInit() {
		console.log('init');
		this.createForm();
	}

}
