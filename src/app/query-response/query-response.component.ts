import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-query-response',
  templateUrl: './query-response.component.html',
  styleUrls: ['./query-response.component.css']
})
export class QueryResponseComponent implements OnInit {

  public isStatus=true;
  public queryResponseId:any;
  public data:any;

  public empId:any;
  public customerName:any;


  constructor(private queryResponseObj:BankServiceService ,private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {
    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.queryResponseId=localStorage.getItem("local_sid");
    this.data={
      
        "queryNo":this.queryResponseId,
        "queryRequest": "",
        "queryResponse":"",
        "requestDate":"",
        "responseDate":new Date(),
        "status": "",
        "account":{
            "accountNumber":""
        },
        "employee":{
            "employeeId": this.empId
        }

    }


    if(this.queryResponseId>0){
      this.queryResponseObj.getQueryDetailsById(this.queryResponseId).subscribe((result:any)=> {
      this.data.account.accountNumber=result['accoutnNumber'],
    
      this.customerName=result['customerName'],
      this.data.requestDate=result['DateOfQuery'],
      this.data.queryRequest=result['customerQuery']
      })
    }


  }

  
  // public query={
  //   "status":"",
  //   "response":""
  // }

  method1(){
    if(this.data.status=="Responded"){
      this.isStatus=false;
    }
    else{
      //this.query.response="";
      this.isStatus=true;
    } 
  }  

public onEdit(){
    console.log()
    console.log("onEdit()");
    this.queryResponseObj.updateQuery(this.data).subscribe((result:any)=>{
      console.log(result);
      console.log(result['status']);
      if(result['status']==200)
      {
        this.r.navigate(['query-list'])
      }else{
  
        console.log(result['message'])
      }
    })

  }


  public checkValidSession()
  {
    if(this.authObj.getLoginStatus()==false){
        this.r.navigate(['login']);
    }
  }
  public SignOut(){
    this.authObj.setLoginStatus(false);
    this.r.navigate(['login']);
  }


}
