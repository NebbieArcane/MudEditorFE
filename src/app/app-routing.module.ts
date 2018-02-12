import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MobsComponent} from './mobs/mobs.component';
import {ObjectsComponent} from './objects/objects.component';
import {RoomsComponent} from './rooms/rooms.component';
import {ShopsComponent} from './shops/shops.component';
import {ZonesComponent} from './zones/zones.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'mobs/:id', component: MobsComponent},
  {path: 'objects/:id', component: ObjectsComponent},
  {path: 'rooms/:id', component: RoomsComponent},
  {path: 'shops/:id', component: ShopsComponent},
  {path: 'zones/:id', component: ZonesComponent},
  {path: 'zones/', component: ZonesComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
