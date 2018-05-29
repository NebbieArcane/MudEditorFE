import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MobsComponent} from './mobs/mobs.component';
import {ObjectsComponent} from './objects/objects.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ShopsComponent} from './shops/shops.component';
import {ZonesComponent} from './zones/zones.component';
import {ZoneDetailComponent} from './zone-detail/zone-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'mobs', component: MobsComponent},
  {path: 'mobs/:id', component: MobsComponent},
  {path: 'objects', component: ObjectsComponent},
  {path: 'objects/:id', component: ObjectsComponent},
  {path: 'rooms-api', component: RoomsComponent},
  {path: 'rooms-api/:id', component: RoomsComponent},
  {path: 'shops', component: ShopsComponent},
  {path: 'shops/:id', component: ShopsComponent},
  {path: 'zones/:id', component: ZonesComponent},
  {path: 'zones', component: ZonesComponent},
  {path: 'zones/new', component: ZoneDetailComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule {
}
