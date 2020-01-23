import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-officers',
  styleUrls: ['./officers.component.scss'],
  templateUrl: './officers.component.html',
})
export class OfficersComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
