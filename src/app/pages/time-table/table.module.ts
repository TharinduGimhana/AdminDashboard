import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TimeTableRoutingModule } from './table-routing.module'
import { TableComponent } from './table.component';
import { TimeTableComponent } from './table/time-table.component';
import { RouteComponent } from './route/route.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TimeTableRoutingModule,

    
  ],
  declarations: [
    TableComponent,
    TimeTableComponent,
    RouteComponent,
    VehicleDetailsComponent
 
  ],
})
export class TimeTableModule { }