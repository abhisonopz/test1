import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any=FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contact=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(24)]],
      age:['',Validators.required],
      number:['',[Validators.required,Validators.pattern("^[0-9]{8,10}$")
    ]],
      email:['',[Validators.required,Validators.email,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]]
    })

    



  }

  get f(){
    return this.contact.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.contact.invalid){
      console.log("this.contact.invalid",this.contact.invalid);alert("Please fill all the fields")

      
      return;
    }
    alert('SUCCESS: \n\n'+JSON.stringify(this.contact.value))
    console.log("++++++Success++++++");
    

  }
  log(data:any){
console.log("data",data)
  }

}
