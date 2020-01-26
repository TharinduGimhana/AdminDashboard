import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Component, Input } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
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

  customColumn = 'Vehicle Number';
  defaultColumns = ['Model', 'Registration Date', 'Type'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection=NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
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
    // {
    //   data: { vehicleNumber: 'Projects', model: '1.8 MB', registrationDate: '5', type: 'dir' },
    //   children: [
    //     { data: { vehicleNumber: 'project-1.doc', model: 'doc', registrationDate: '240 KB' } },
    //     { data: { vehicleNumber: 'project-2.doc', model: 'doc', registrationDate: '290 KB' } },
    //     { data: { vehicleNumber: 'project-3', model: 'txt', registrationDate: '466 KB' } },
    //     { data: { vehicleNumber: 'project-4.docx', model: 'docx', registrationDate: '900 KB' } },
    //   ],
    // },
    // {
    //   data: { vehicleNumber: 'Reports', model: 'dir', registrationDate: '400 KB', type: '2' },
    //   children: [
    //     { data: { vehicleNumber: 'Report 1', model: 'doc', registrationDate: '100 KB' } },
    //     { data: { vehicleNumber: 'Report 2', model: 'doc', registrationDate: '300 KB' } },
    //   ],
    // },
    // {
    //   data: { vehicleNumber: 'Other', model: 'dir', registrationDate: '109 MB', type: '2' },
    //   children: [
    //     { data: { vehicleNumber: 'backup.bkp', model: 'bkp', registrationDate: '107 MB' } },
    //     { data: { vehicleNumber: 'secret-note.txt', model: 'txt', registrationDate: '2 MB' } },
    //   ],
    // },
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
