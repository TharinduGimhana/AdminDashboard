import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule, NbWindowModule, NbDialogModule, NbTooltipModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { ClientComponent } from './client/client.component';
import { OfficersComponent, FsIconComponent } from './officers/officers.component';
import { OfficersformComponent } from './officers/officersform/officersform.component';
import { FormsModule } from '@angular/forms';
import { ClientformComponent } from './client/clientform/clientform.component';
 

const ENTRY_COMPONENTS = [
  OfficersformComponent,
  ClientformComponent
];

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ManageProfileRoutingModule,
    NbTreeGridModule,

    
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbWindowModule.forRoot(),

    FormsModule,
    ThemeModule,
     
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCardModule,
     
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbTooltipModule,

  ],
  declarations: [
    ManageProfileComponent,
    ClientComponent,
    OfficersComponent,
    FsIconComponent,
    OfficersformComponent,
    ClientformComponent
    
  ],
  entryComponents:[
    ...ENTRY_COMPONENTS
  ]
})
export class ManageProfileModule { }