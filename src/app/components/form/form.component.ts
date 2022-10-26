import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  persons: Person[] = [];
  myForm!: FormGroup;
  
  
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]]
    })
  }
  
  inserir(){
    if(this.myForm.valid){
      this.persons.push(this.myForm.value);
      this.myForm.reset();
      console.log(this.persons);
    }
  }

  limpar(){
    this.myForm.reset();
  }

}
