import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbMenuService } from '@nebular/theme';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {

  Date: string;
  startAt: string;
  endAt: string;
  vehicleNo: string;
  rootName: string;
  driverName: string;

}

@Component({
  selector: 'ngx-time-table',
  styleUrls: ['./time-table.component.scss'],
  templateUrl: './time-table.component.html',
})
export class TimeTableComponent {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  customColumn = 'Date';
  defaultColumns = [ 'startAt', 'endAt', 'vehicleNo', 'rootName', 'driverName' ];

  allColumns = [ this.customColumn, ...this.defaultColumns ];
  tabletopic=['Start At','End At', 'Vehicle Number', 'Root Name', 'Driver Name'];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private windowService: NbWindowService, private menuService: NbMenuService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  openWindowForm() {
    this.windowService.open(TimetableFormComponent, { title: `Add New` });
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {

      data: { Date: 'Jan 6, 2020', startAt: '08:00', endAt: '10:30', vehicleNo: '001', rootName: 'root1', driverName: 'kasun' }
    },
    {
      data: { Date: 'Jan 6, 2020', startAt: '08:00', endAt: '10:30', vehicleNo: '001', rootName: 'root2', driverName: 'kasun' }
    },
    {
      data: { Date: 'Jan 6, 2020', startAt: '08:00', endAt: '10:30', vehicleNo: '001', rootName: 'root3', driverName: 'nimal' }
    }

  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
