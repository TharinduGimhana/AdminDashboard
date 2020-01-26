import { NbMenuService, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Component, Input } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  customer_ID: Number;
  customer_name: string;
  Address: string;
  complain: string;
}

@Component({
  selector: 'ngx-Complain',
  styleUrls: ['./complain.component.scss'],
  templateUrl: './complain.component.html',
})
export class ComplainComponent {
  customColumn = 'customer_ID';
  defaultColumns = [ 'customer_name', 'Address', 'complain' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  constructor(private menuService: NbMenuService ,private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
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
    {
      data: { customer_ID: 1, customer_name: 'Amal Perera', complain: 'complain about garabge recycling ', Address: 'Imbulpe' },
      
    },
    {
      data: { customer_ID: 2, Address: 'Balangoda', customer_name: 'Nishantha Sunil', complain: 'complain is canceled' },
     
    },
    {
      data: { customer_ID: 3,Address: 'Bandareawela', customer_name: 'Tharindu Gimhana', complain: 'Need a garabage truck once a week' },
      
    },
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