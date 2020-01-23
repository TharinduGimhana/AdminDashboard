import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    AuthRoutingModule,
    
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
   
  ],
})
export class AuthModule { }