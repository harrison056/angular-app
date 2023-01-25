import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  persons: Person[] = [
    {nome:'exemplo1', telefone:'11111111111'},
    {nome:'exemplo2', telefone:'22222222222'}
  ];
  myForm!: FormGroup;
  
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]]
    })
  }
  
  inserir(){
    if(this.myForm.valid){
      this.persons.push(this.myForm.value);
      this.persons = this.persons.slice();
      this.myForm.reset();
    }
  }

  getPersons() {
    return this.persons;
  }

  limpar(){
    this.myForm.reset();
  }

}
