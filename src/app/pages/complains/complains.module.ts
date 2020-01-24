import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule,NbIconModule, NbInputModule, NbTreeGridModule  } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { ThemeModule } from '../../@theme/theme.module';
import { ComplainsRoutingModule } from './complains.routing.module';
import { ComplainsComponent } from './complains.component';
import { ComplainComponent } from './complain/complain.component';

import { FsIconComponent } from './complain/complain.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ComplainsRoutingModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
  ],
  declarations: [
    ComplainsComponent,
    ComplainComponent,
    FsIconComponent,
  ],
})
export class ComplainsModule { }