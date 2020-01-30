import { NbWindowService,NbMenuService, NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Component,  Input, TemplateRef,ViewChild } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {

  customer_ID: Number;
  customer_name: string;
  NIC: string;
  Contact: number;

}

@Component({
  selector: 'ngx-client',
  styleUrls: ['./client.component.scss'],
  templateUrl: './client.component.html',
})
export class ClientComponent {
  customColumn = 'customer_ID';
  defaultColumns = [ 'customer_name', 'NIC', 'Contact' ];

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

      data: { customer_ID: 1, customer_name: 'Amal Perera', NIC: '947170068v ', Contact: 714589328 },
      
    },
    {
      data: { customer_ID: 2, Contact: 774568256, customer_name: 'Nishantha Sunil', NIC: '98714568v' },
     
    },
    {
      data: { customer_ID: 3, Contact: 754589613, customer_name: 'Tharindu Gimhana', NIC: '754875892v' },
      

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