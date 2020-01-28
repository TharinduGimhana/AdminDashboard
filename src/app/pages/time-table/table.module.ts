import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
 
import { FsIconComponent } from "./vehicle-details/vehicle-details.component";
import { RouteComponent } from './route/route.component';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { routedComponents } from '../maps/maps-routing.module';
   
 


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TablesRoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbWindowModule.forRoot()
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    RouteComponent,
     
     
     
  ],
})

export class TableModule { }