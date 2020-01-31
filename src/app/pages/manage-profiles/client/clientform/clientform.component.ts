import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss']
})
export class ClientformComponent implements OnInit {

  constructor(public windowRef: NbWindowRef) { }

  ngOnInit() {
  }
  close() {
    this.windowRef.close();
  }

}
