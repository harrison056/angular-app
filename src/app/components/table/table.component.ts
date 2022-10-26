import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/person';
import {  FormComponent  } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() persons: Person[] = [];

  displayedColumns = ['nome', 'telefone'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
