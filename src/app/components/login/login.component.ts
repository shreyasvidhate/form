import { LocationStrategy } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  check:boolean=false
  constructor(private router:Router , private location:LocationStrategy) {
    history.pushState(null, 'null', 'login.component.html');  
    this.location.onPopState(() => {
      history.pushState(null, 'null','login.component.html' );
    });
    }
  ngOnInit(): void {
  }
  onSubmit(_data: any): void{
    this.router.navigate(['register'])
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
