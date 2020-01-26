import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss','./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
