import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-vehicle-details',
  styleUrls: ['./vehicle-details.component.scss'],
  templateUrl: './vehicle-details.component.html',
})
export class VehicleDetailsComponent {

  constructor(private menuService: NbMenuService) {
  }


}
