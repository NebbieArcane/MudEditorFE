import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ZonesComponent} from './zones/zones.component';
import {ShopsComponent} from './shops/shops.component';
import {MobsComponent} from './mobs/mobs.component';
import {ObjectsComponent} from './objects/objects.component';
import {AppRoutingModule} from './app-routing.module';
import {ZoneService} from './zone.service';
import {ZoneDetailComponent} from './zone-detail/zone-detail.component';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import { ZoneFormComponent } from './zone-form/zone-form.component';
import { HomeComponent } from './home/home.component';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ZoneService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
