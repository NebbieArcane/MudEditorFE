import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ZoneCommandObject } from '../data-modeling/zones-api/zone-command-object';

@Component({
	selector: 'app-zone-command-form',
	templateUrl: './zone-command-form.component.html',
	styleUrls: ['./zone-command-form.component.css']
})
export class ZoneCommandFormComponent implements OnInit, OnChanges {

	@Input() commandObject: ZoneCommandObject;

	commandForm: FormGroup;

	submitted = false;

	title = "Modify Command";

	ifFlag = [false, true];

	equipmentPosition = [
		'Used as light',
        'Worn on right finger',
        'Worn on left finger',
        'First object worn around neck',
        'Second object worn around neck',
        'Worn on body',
        'Worn on head',
        'Worn on legs',
        'Worn on feet',
        'Worn on hands',
        'Worn on arms',
        'Worn as shield',
        'Worn about body',
        'Worn around waist',
        'Worn around right wrist',
        'Worn around left wrist',
        'Wielded as a weapon',
        'Held'
	];

	exit = [
		'North',
        'East',
        'South',
        'West',
        'Up',
        'Down'
	];

	state = [
		'Open',
        'Closed',
        'Locked'
	]; 


	onSubmit() {
		this.submitted = true;
	}

	createForm() {
		if(this.commandObject) {
			// console.log(JSON.stringify(this.commandObject));
			this.commandForm = this.fb.group ({
				vNum: this.commandObject.vnum,
				ifFlag: this.commandObject.ifFlag,
				cap: this.commandObject.cap,
				room: this.commandObject.room,
				reserved: [{ value: this.commandObject.reserved, disabled: true}],
				slot: this.commandObject.slot,
				into: this.commandObject.into,
				exit: this.commandObject.exit,
				state: this.commandObject.state
			});
		} else {
			this.commandForm = this.fb.group ({
				vNum: null,
				ifFlag: null,
				cap: null,
				room: null,
				reserved: [{ value: null, disabled: true}],
				slot: null,
				into: null,
				exit: null,
				state: null
			});
		}
	}

	constructor(private fb: FormBuilder) { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes['zoneobject']) {
			// this.model = this.zoneObject;
			// console.log(JSON.stringify(this.model));
		}
	}

	ngOnInit() {
		console.log('init');
		this.createForm();
	}

}
