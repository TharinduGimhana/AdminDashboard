import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-time-table',
  styleUrls: ['./time-table.component.scss'],
  templateUrl: './time-table.component.html',
})
export class TimeTableComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
