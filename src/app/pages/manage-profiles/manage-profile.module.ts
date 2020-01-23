import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { ClientComponent } from './client/client.component';
import { OfficersComponent } from './officers/officers.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ManageProfileRoutingModule,
    
  ],
  declarations: [
    ManageProfileComponent,
    ClientComponent,
    OfficersComponent
  ],
})
export class ManageProfileModule { }