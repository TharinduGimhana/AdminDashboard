import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TableRoutingModule, routedComponents } from './table-routing.module'
import { FsIconComponent } from "./vehicle-details/vehicle-details.component";


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TableRoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent
  ],
})

export class TableModule { }