import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private obj1:BankServiceService,private r:Router,private loginObj:AuthService ) { }

  ngOnInit(): void {
  }

  public employee={
    "username":"",
    "password":""
  }

  public login(){

     this.obj1.login(this.employee).subscribe((result:any)=>{
       if(result['employeeId']==0){
         console.log("invalid user information")
         alert("Wrong Username/Password")
       }
       else{
        localStorage.removeItem("local_empId");
        localStorage.setItem("local_empId",result['employeeId'].toString());
        console.log(result['employeeId']);

        this.loginObj.setLoginStatus(true);
        
        this.r.navigate(['menu']);
       }
     })
  }



}
