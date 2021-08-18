import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  public isStatus=true;
  public addCardData:any;
  public data:any;

  public empId:any;
  public customerName:any;
  public accountType:any;

  constructor(private addCardObj: BankServiceService,private r:Router, private authObj:AuthService) { }

  ngOnInit(): void {

    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.data={
      "id":"",
      "requestDate":"",
      "responseDate":new Date(),
      "status":"",
      "description":"",
      "account":{
        "accountNumber":""},
      "employee":{
        "employeeId": this.empId}
       
    }

    this.addCardData=localStorage.getItem("local_sid");
    if(this.addCardData>0){
      this.addCardObj.getAddOnCardDetailsById(this.addCardData).subscribe((result:any)=> {
        this.data.account.accountNumber=result['accountNumber'],
        this.data.id=result['requestId'],
        this.customerName=result['customerName'],
        this.data.requestDate=result['requestDate']
      })
    }

  }

  public addcard={
    "status":"",
    "rejection":""
  }
  method1(){
    if(this.data.status=="Rejected"){
      this.isStatus=false;
    }
    else{
      this.addcard.rejection="";
      this.isStatus=true;
    }
  }


  public onEdit(){
    console.log()
    console.log("onEdit()");
    this.addCardObj.updateAddOnCard(this.data).subscribe((result:any)=>{
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
