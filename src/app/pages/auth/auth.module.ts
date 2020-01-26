import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbAlertModule, NbIconModule, NbCheckboxModule, NbInputModule, NbActionsModule, NbUserModule, NbRadioModule, NbDatepickerModule } from '@nebular/theme';

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
    NbAlertModule,
    NbIconModule,
    NbCheckboxModule,
    NbInputModule,
    NbActionsModule,
    NbUserModule,
    NbRadioModule,
    NbDatepickerModule,
   
     
    
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
   
  ],
})
export class AuthModule { }