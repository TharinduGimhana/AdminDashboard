import { NbMenuService, NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest, NbWindowService } from '@nebular/theme';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { WindowFormComponent } from '../../modal-overlays/window/window-form/window-form.component';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  rootname: string;
  rootcode: string;
  toframe: string;
  items?: number;
}
@Component({
  selector: 'ngx-route',
  styleUrls: ['./route.component.scss'],
  templateUrl: './route.component.html',
})
export class RouteComponent {
  customColumn = 'rootname';
  defaultColumns = [ 'rootcode', 'toframe' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  tabletopic=['Root code','To From']

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;                                  //import
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;        //import


  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>,private windowService: NbWindowService) {    //import
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }
//imported
  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }

  openWindowForm() {
    this.windowService.open(WindowFormComponent, { title: `Window` });
  }
 //
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
      data: { rootname: 'Projects', rootcode: '1.8 MB', toframe: 'dir' },
      // children: [
      //   { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
      //   { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
      //   { data: { name: 'project-3', kind: 'txt', size: '466 KB' } },
      //   { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
      // ],
    },
    {
      data: { rootname: 'Reports', rootcode: 'dir', toframe: '400 KB' },
      // children: [
      //   { data: { name: 'Report 1', kind: 'doc', size: '100 KB' } },
      //   { data: { name: 'Report 2', kind: 'doc', size: '300 KB' } },
      // ],
    },
    {
      data: { rootname: 'Other', rootcode: 'dir', toframe: '109 MB' },
      // children: [
      //   { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
      //   { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
      // ],
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
