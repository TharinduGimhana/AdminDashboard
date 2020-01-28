import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.scss']
})
export class RouteFormComponent{

  constructor(public windowRef: NbWindowRef) { }

  close() {
    this.windowRef.close();
  }

}
