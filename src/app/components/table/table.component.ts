import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Person } from 'src/app/model/person';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnChanges {

  @Input() person: Person[] = [];

  displayedColumns: string[] = ['nome', 'telefone'];
  dataSource = new MatTableDataSource(this.person);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    const personValue = changes['person']
      this.dataSource = new MatTableDataSource(this.person);
      console.log(personValue)
  }

}
