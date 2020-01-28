import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent {

  constructor(public windowRef: NbWindowRef) { }

  close() {
    this.windowRef.close();
  }

}



