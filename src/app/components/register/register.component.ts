import { Component, OnInit } from '@angular/core';
import { InfoServiceService } from '../info-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  check=false;
  constructor(private regserivce:InfoServiceService) {  
  }
  ngOnInit(): void {
  }
  onSubmit(data:any): void{ 
    this.regserivce.conductor(data.value)
  }
  fcheck(data:any){
    if (data){
      this.check=true
    }
    else(
      this.check=false
    )
  }
  keyfunc(){
   this.check=false
  }

}
