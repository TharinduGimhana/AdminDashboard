import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule,NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { ClientComponent } from './client/client.component';
import { OfficersComponent } from './officers/officers.component';
import { FsIconComponent } from './client/client.component';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ManageProfileRoutingModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
  ],
  declarations: [
    ManageProfileComponent,
    ClientComponent,
    OfficersComponent,
    FsIconComponent,
  ],
})
export class ManageProfileModule { }