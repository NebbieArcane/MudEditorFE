import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

import { MessageService } from './message.service';
import { ZonesObject } from './data-modeling/zones-api/zones-object';
import { ZoneObject } from './data-modeling/zones-api/zone-object';




@Injectable()
export class DbZoneRestServiceService {

	private zonesUrl = environment.zoneDbRestApi;
	private secret = environment.auth;

	constructor(
		private http: HttpClient,
		private messageService: MessageService) { }

	getZones(): Observable<ZonesObject[]> {
		let finalUrl = this.zonesUrl + '?' + this.secret;
		console.log(finalUrl);
		this.messageService.add('Zone service: fetched zone');
		return this.http.get<ZonesObject[]>(finalUrl);
	}

}
