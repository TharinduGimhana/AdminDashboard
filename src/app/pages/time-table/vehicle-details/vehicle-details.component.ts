import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Id: number;
  vehicleNumber: string;
  model: string;
  registrationDate: string;
  type?: string;
}

@Component({
  selector: 'ngx-vehicle-details',
  styleUrls: ['./vehicle-details.component.scss'],
  templateUrl: './vehicle-details.component.html',
})
export class VehicleDetailsComponent {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  customColumn = 'Id';
  defaultColumns = ['vehicleNumber', 'model', 'registrationDate', 'type'];
  allColumns = [this.customColumn, ...this.defaultColumns];
  tabletopic=['Vehicle Number', 'Model', 'Registration Date', 'Type'];

  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection=NbSortDirection.NONE;

  constructor(private windowService: NbWindowService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  openWindowForm() {
    this.windowService.open(VehicleFormComponent, { title: `Add New` });
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
      data: { Id: 1, vehicleNumber: 'Projects', model: '1.8 MB', registrationDate: '5', type: 'dir' },
      
    },
    {
      data: { Id: 2, vehicleNumber: 'Reports', model: 'dir', registrationDate: '400 KB', type: '2' },
      
    },
    {
      data: { Id: 3, vehicleNumber: 'Other', model: 'dir', registrationDate: '109 MB', type: '2' },
      
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
