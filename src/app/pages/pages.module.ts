import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ManageProfileModule } from './manage-profiles/manage-profile.module';
import {MapsModule } from './maps/maps.module';
import { AuthModule } from "./auth/auth.module";
import { TableModule } from "./time-table/table.module";
import { ComplainsModule } from "./complains/complains.module";





@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ManageProfileModule,
    MapsModule,
    AuthModule,
    TableModule,
    ComplainsModule,
    
  ],
  declarations: [
    PagesComponent,
  
  ],
})
export class PagesModule {
}
