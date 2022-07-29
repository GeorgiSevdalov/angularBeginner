import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LeadsTableDataSource, LeadsTableItem } from './leads-table-datasource';

@Component({
  selector: 'leads-table',
  templateUrl: './leads-table.component.html',
  styleUrls: ['./leads-table.component.css']
})
export class LeadsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LeadsTableItem>;
  dataSource: LeadsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'next_activity', 'labels', 'source', 'lead_created', 'owner'];

  constructor() {
    this.dataSource = new LeadsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
