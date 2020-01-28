import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-timetable-form',
  templateUrl: './timetable-form.component.html',
  styleUrls: ['./timetable-form.component.scss']
})
export class TimetableFormComponent{

  constructor(public windowRef: NbWindowRef) { }

  close() {
    this.windowRef.close();
  }

}
