import { NgModule } from '@angular/core';
import {
  NbCheckboxModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbButtonModule,
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  NbDialogModule,
  NbWindowModule
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { TableRoutingModule, routedComponents } from './table-routing.module'
import { FsIconComponent } from "./vehicle-details/vehicle-details.component";
import { RouteComponent } from './route/route.component';
import { TimetableFormComponent } from './table/timetable-form/timetable-form.component';



@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TableRoutingModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbWindowModule.forRoot(),
    FormsModule,
    NbDialogModule.forChild(),
    NbCheckboxModule,
    NbTabsetModule,
    NbPopoverModule,
    NbSelectModule,
    NbTooltipModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    RouteComponent,
    TimetableFormComponent,
  ],
  entryComponents: [
    TimetableFormComponent,
  ],
})

export class TableModule { }