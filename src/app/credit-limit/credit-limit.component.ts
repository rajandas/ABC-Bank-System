import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-credit-limit',
  templateUrl: './credit-limit.component.html',
  styleUrls: ['./credit-limit.component.css']
})
export class CreditLimitComponent implements OnInit {
  
  public textAreaStatus=true;
  public approveStatus=true;
  
  public isStatus=true;
  public creditStatus=true;
  public creditLimitId:any;
  public data:any;

  public empId:any;
  public customerName:any;
  public accountType:any;

  public approvedCreditLimit:any;
  public currentCreditLimit:any;


  constructor(private creditLimitObj:BankServiceService,private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {

    this.checkValidSession();

    this.empId=localStorage.getItem("local_empId");
    this.data={
      "cardNumber":"",
      "cardType":"",
      "currentCreditLimit":"",
      "maxCreditLimit":"",
      "requestedCreditLimit":"",
      "requestDate":"",
      "responseDate":new Date(),
      "status":"",
      "description":"",
      "account":{
        "accountNumber":""},
      "employee":{
        "employeeId": this.empId},
      
    }

    this.creditLimitId=localStorage.getItem("local_sid");
    if(this.creditLimitId>0){
      this.creditLimitObj.getCreditLimitDetailsById(this.creditLimitId).subscribe((result:any)=> {
        this.data.account.accountNumber=result['accountNumber'],
        this.accountType=result['accountType'],
        this.customerName=result['customerName'],
        this.data.requestDate=result['requestDate'],
        this.data.cardType=result['cardType'],
        this.data.cardNumber=result['requestId'],
        this.data.currentCreditLimit=result['currentCreditLimit'],
        this.data.maxCreditLimit=result['maxCreditLimit'],
        this.data.requestedCreditLimit=result['requestedCreditLimit'],

        this.approvedCreditLimit=this.data.currentCreditLimit

      })
    }

  }


  public creditLimit={
    "status":"",
    "approvedAmount":"",
    "rejection":""
  }
  method1(){
    if(this.data.status=="Approved"){
      this.approveStatus=false;
    }
    else{this.approveStatus=true;}
  }
  method2(){
    if(this.data.status=="Approved" || this.data.status=="Rejected"){
      this.textAreaStatus=false; 
    }
    else{this.textAreaStatus=true;}
  }


  public onEdit(){
    this.r.navigate(['request-list']);
    
  }



  // public onEdit(){

  //   if(this.creditLimit.approvedAmount>this.data.maxCreditLimit){
  //     this.r.navigate(['credit-limit']);
  //     alert("Please Enter the Approved credit amount less than or equal to the Maximum credit limit !!");
  //   }
  //   else if (this.creditLimit.approvedAmount==null) {
  //     this.creditLimitObj.updateCreditLimit(this.data).subscribe((result:any)=>{
  //       if(result['status']==200)
  //       {
  //         this.r.navigate(['request-list'])
  //       }else{
  //         console.log(result['message'])
  //       }
        
  //     })
      
  //   } else {
  //     this.data.currentCreditLimit=this.creditLimit.approvedAmount;
  //     this.creditLimitObj.updateCreditLimit(this.data).subscribe((result:any)=>{
  //             if(result['status']==200)
  //             {
  //               this.r.navigate(['request-list'])
  //             }else{
  //               console.log(result['message'])
  //             }
              
  //           })

  //   }
    //this.r.navigate(['request-list'])
    //console.log("onEdit()");
   
    // if(this.data.status=="Approve"){
    //   if(this.approvedCreditLimit>= this.data.maxCreditLimit){
    //     this.creditLimitObj.updateCreditLimit(this.data).subscribe((result:any)=>{
    //       console.log(result);
    //       console.log(result['status']);
    //       if(result['status']==200)
    //       {
    //         console.log(this.approvedCreditLimit)
    //         this.r.navigate(['request-list'])
    //       }else{
    //         console.log(result['message'])
    //       }
          
    //     })
    //   }
    //   else{
    //     alert("Please Enter the Approved credit limit less than or equal to the Maximum credit limit !!")
    //     return
    //   }
    // }
    // else{
    //   this.creditLimitObj.updateCreditLimit(this.data).subscribe((result:any)=>{
    //     console.log(result);
    //     console.log(result['status']);
    //     if(result['status']==200)
    //     {
    //       console.log(this.approvedCreditLimit)
    //       this.r.navigate(['request-list'])
    //     }else{
    //       console.log(result['message'])
    //     }
        
    //   })
    // }
    

 // }

  
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
