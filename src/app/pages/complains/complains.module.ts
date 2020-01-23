import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ComplainsRoutingModule } from './complains.routing.module';
import { ComplainsComponent } from './complains.component';
import { ComplainComponent } from './complain/complain.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ComplainsRoutingModule,
  ],
  declarations: [
    ComplainsComponent,
    ComplainComponent,
  ],
})
export class ComplainsModule { }