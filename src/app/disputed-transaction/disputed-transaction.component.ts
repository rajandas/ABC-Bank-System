import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-disputed-transaction',
  templateUrl: './disputed-transaction.component.html',
  styleUrls: ['./disputed-transaction.component.css']
})
export class DisputedTransactionComponent implements OnInit {
  public isStatus=true;
  public disputedTransactionId:any;
  public data:any;

  public empId:any;
  public customerName:any;
  public accountType:any;

  constructor(private disputedTransactionObj: BankServiceService,private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {

    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.data={
      "id":"",
      "merchantName":"",
      "cardNo":"",
      "dateOfTransection":"",
      "disputedAmount":"",
      "reasonForDispute":new Date(),
      "requestDate":"",
      "status":"",
      "description":"", 
      "responseDate":"",
      "account":{
        "accountNumber":""},
      "employee":{
        "employeeId": this.empId}
       
    }

    this.disputedTransactionId=localStorage.getItem("local_sid");
    if(this.disputedTransactionId>0){
      this.disputedTransactionObj.getDisputedTransactionDetailsById(this.disputedTransactionId).subscribe((result:any)=> {
        this.data.account.accountNumber=result['accountNumber'],
        this.accountType=result['accountType'],
        this.customerName=result['customerName'],
        this.data.dateOfTransection=result['dateOfTransection'],
        this.data.merchantName=result['merchantName'],
        this.data.cardNo=result['cardNo'],
        this.data.reasonForDispute=result['reasonForDispute'],
        this.data.disputedAmount=result['disputedAmount'],
        this.data.id=result['requestId'],
        this.data.requestDate=result['requestDate']
      })
    }


  }

  public desputedTransection={
    "status":"",
    "rejection":""
  }
  method1(){
    if(this.data.status=="Rejected"){
      this.isStatus=false;
    }
    else{
      this.desputedTransection.rejection="";
      this.isStatus=true;
    }

  }


  
  public onEdit(){
    console.log()
    console.log("onEdit()");
    this.disputedTransactionObj.updateDisputedTransaction(this.data).subscribe((result:any)=>{
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
