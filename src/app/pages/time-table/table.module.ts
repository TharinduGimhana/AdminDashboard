import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TimeTableRoutingModule, routedComponents } from './table-routing.module'
import { FsIconComponent } from './table/time-table.component';
import { TimeTableComponent } from './table/time-table.component';
import { RouteComponent } from './route/route.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    TimeTableRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule
    
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    TimeTableComponent,
    RouteComponent,
    VehicleDetailsComponent
  ],
})
export class TimeTableModule { }