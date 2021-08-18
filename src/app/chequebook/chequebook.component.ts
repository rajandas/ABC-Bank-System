import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-chequebook',
  templateUrl: './chequebook.component.html',
  styleUrls: ['./chequebook.component.css']
})
export class ChequebookComponent implements OnInit {
  public isStatus=true;
  public chequeData:any;
  public data:any;

  public empId:any;
  public customerName:any;
  public accountType:any;

  constructor(private chequeObj: BankServiceService,private r:Router, private authObj:AuthService) { }

  ngOnInit():void{

    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.data={
      "chequebookNo":"",
      "noOfLeaves":"",
      "requestDate":"",
      "responseDate":new Date(),
      "status":"",
      "description":"",
      "account":{
        "accountNumber":""},
      "employee":{
        "employeeId": this.empId}
    }

    this.chequeData=localStorage.getItem("local_sid");
    if(this.chequeData>0){
      this.chequeObj.getChequebookDetailsById(this.chequeData).subscribe((result:any)=> {
        this.data.account.accountNumber=result['accountNumber'],
        this.accountType=result['accountType'],
        this.customerName=result['customerName'],
        this.data.requestDate=result['requestDate'],
        this.data.noOfLeaves=result['noOfLeaves'],
        this.data.chequebookNo=result['requestId']

      })
    }

  }

  public chequebook={
    "status":"",
    "rejection":""
  }
  method1(){
    if(this.data.status=="Rejected"){
      this.isStatus=false;
    }
    else{
      this.chequebook.rejection="";
      this.isStatus=true;
    } 
  }


  public onEdit(){
    console.log()
    console.log("onEdit()");
    this.chequeObj.updateChequebook(this.data).subscribe((result:any)=>{
      console.log(result);
      console.log(result['status']);
      if(result['status']==200)
      {
        this.r.navigate(['request-list'])
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
