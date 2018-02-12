import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ZonesComponent} from './zones/zones.component';
import {ShopsComponent} from './shops/shops.component';
import {MobsComponent} from './mobs/mobs.component';
import {ObjectsComponent} from './objects/objects.component';
import {AppRoutingModule} from './app-routing.module';
import {ZoneService} from './zone.service';
import { ZoneDetailComponent } from './zone-detail/zone-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ZonesComponent,
    ShopsComponent,
    MobsComponent,
    ObjectsComponent,
    ZoneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ZoneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
