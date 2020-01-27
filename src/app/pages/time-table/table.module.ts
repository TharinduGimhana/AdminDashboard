import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbDialogModule, NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TableRoutingModule, routedComponents } from './table-routing.module'
import { FsIconComponent } from "./vehicle-details/vehicle-details.component";
import { RouteComponent } from './route/route.component';
   
 


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TableRoutingModule,
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