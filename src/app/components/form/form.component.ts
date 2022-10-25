import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person[] = [];
  myForm: any = FormGroup;
  
  
  constructor(
    private fb: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nome: ['', [Validators.required]],
      tel: ['', [Validators.required]]
    })
  }
  
  inserir(){
    this.person.push(this.myForm.value);
    this.myForm.reset();
    console.log(this.person);
  }

  limpar(){
    this.myForm.reset();
  }

}
