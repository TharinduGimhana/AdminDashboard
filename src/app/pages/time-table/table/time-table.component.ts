import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbMenuService } from '@nebular/theme';
import { Time } from '@angular/common';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {

  date: string;
  start_at: string;
  end_at: string;
  vehicle_no: string;
  root_name: string;
  driver_name: string;

}

@Component({
  selector: 'ngx-time-table',
  styleUrls: ['./time-table.component.scss'],
  templateUrl: './time-table.component.html',
})
export class TimeTableComponent {


  customColumn = 'date';
  defaultColumns = [ 'start_at', 'end_at', 'vehicle_no', 'root_name', 'driver_name' ];

  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private menuService: NbMenuService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
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

      data: { date: 'Jan 6, 2020', start_at: '08:00', end_at: '10:30', vehicle_no: '001', root_name: 'root1', driver_name: 'kasun' }
    },
    {
      data: { date: 'Jan 6, 2020', start_at: '08:00', end_at: '10:30', vehicle_no: '001', root_name: 'root2', driver_name: 'kasun' }
    },
    {
      data: { date: 'Jan 6, 2020', start_at: '08:00', end_at: '10:30', vehicle_no: '001', root_name: 'root3', driver_name: 'nimal' }
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
