import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-add-profile',
  styleUrls: ['./add-profile.component.scss'],
  templateUrl: './add-profile.component.html',
})
export class AddProfileComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
