import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-lost-stolen-card',
  templateUrl: './lost-stolen-card.component.html',
  styleUrls: ['./lost-stolen-card.component.css']
})
export class LostStolenCardComponent implements OnInit {
  public isStatus=true;
  public lostStolenCardId:any;
  public data:any;

  public empId:any;
  public customerName:any;
  public accountType:any;

  constructor(private lostStolenCardObj:BankServiceService,private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {
    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.data={
       "cardId":"",
       "cardNo":"",
       "cardType":"",
       "requestDate":"",
       "responseDate":new Date(),
       "status":"",
       "description":"",
       "account":{
        "accountNumber":""},
      "employee":{
        "employeeId": this.empId}
      
    }

    this.lostStolenCardId=localStorage.getItem("local_sid");
    if(this.lostStolenCardId>0){
      this.lostStolenCardObj.getLostStolenCardDetailsById(this.lostStolenCardId).subscribe((result:any)=> {
        this.data.account.accountNumber=result['accountNumber'],
        this.accountType=result['accountType'],
        this.customerName=result['customerName'],
        this.data.requestDate=result['requestDate'],
        this.data.cardNo=result['cardNo'],
        this.data.cardType=result['cardType'],
        this.data.cardId=result['requestId']
      })
    }


  }

  public lostStolenCard={
    "status":"",
    "rejection":""
  }
  method1(){
    if(this.data.status=="Rejected"){
      this.isStatus=false;
    }
    else{
      this.lostStolenCard.rejection="";
      this.isStatus=true;
    }

  }

  
  public onEdit(){
    console.log()
    console.log("onEdit()");
    this.lostStolenCardObj.updateLostStolenCard(this.data).subscribe((result:any)=>{
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
