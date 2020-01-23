import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-Complain',
  styleUrls: ['./complain.component.scss'],
  templateUrl: './complain.component.html',
})
export class ComplainComponent {

  constructor(private menuService: NbMenuService) {
  }

 
}