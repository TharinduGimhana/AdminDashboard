import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbAlertModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    AuthRoutingModule,
    NbAlertModule,
    NbIconModule
    
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
   
  ],
})
export class AuthModule { }