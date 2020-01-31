import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-officersform',
  templateUrl: './officersform.component.html',
  styleUrls: ['./officersform.component.scss']
})
export class OfficersformComponent implements OnInit {

  constructor(public windowRef: NbWindowRef) { }

  ngOnInit() {
  }
  close() {
    this.windowRef.close();
  }
}
