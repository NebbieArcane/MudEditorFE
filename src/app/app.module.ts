import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ZonesComponent} from './zones/zones.component';
import {ShopsComponent} from './shops/shops.component';
import {MobsComponent} from './mobs/mobs.component';
import {ObjectsComponent} from './objects/objects.component';
import {AppRoutingModule} from './app-routing.module';
import {ZoneDetailComponent} from './zone-detail/zone-detail.component';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {ZoneFormComponent} from './zone-form/zone-form.component';
import {HomeComponent} from './home/home.component';
import {ZoneRestClientService} from './zone-rest-client.service';
import {ZoneCommandFormComponent} from './zone-command-form/zone-command-form.component';
import {DbZoneRestServiceService} from './db-zone-rest-service.service';
import {DbZoneListFormComponent} from './db-zone-list-form/db-zone-list-form.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ZonesComponent,
    ShopsComponent,
    MobsComponent,
    ObjectsComponent,
    ZoneDetailComponent,
    MessagesComponent,
    ZoneFormComponent,
    HomeComponent,
    ZoneCommandFormComponent,
    DbZoneListFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MessageService, ZoneRestClientService, DbZoneRestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
