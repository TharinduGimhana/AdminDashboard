import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DropOffLocationsRoutingModule } from './drop-off-locations.routing.module';
import { DropOffLocationsComponent } from './drop-off-locations.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    DropOffLocationsRoutingModule,
  ],
  declarations: [
    DropOffLocationsComponent,
    MapComponent,
  ],
})
export class ManageProfileModule { }