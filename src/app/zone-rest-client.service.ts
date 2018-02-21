import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { MessageService } from './message.service';
import { ZoneApiObject } from './data-modeling/zones/zone-api-object';

@Injectable()
export class ZoneRestClientService {

	private zoneUrl = 'https://gilgamesh.nebbie.it/api/v1/zones';
	// private zoneUrl = 'http://localhost/nApi/zones.php';

	constructor(
		private http: HttpClient,
		private messageService: MessageService) { }

	getZones(): Observable<ZoneApiObject[]> {
		console.log('********************************');
		console.log(JSON.stringify(this.http.get<ZoneApiObject[]>(this.zoneUrl)));
		console.log('********************************');
		this.messageService.add('Zone service: fetched zone');
		return this.http.get<ZoneApiObject[]>(this.zoneUrl);
	}

}



