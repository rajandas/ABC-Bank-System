import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  public requestList:any=[];
  public i:any=1;

  constructor(private obj:BankServiceService,private r:Router, private authObj:AuthService) { }

  ngOnInit() {

    this.checkValidSession();
    this.fetchRequests();
  }

  public request={
    
    "i":1,
    "requests":"",
    "status":""
  }

  public fetchRequests(){
    this.obj.getRequestList().subscribe((result:any)=>this.requestList=result);
    
  }

  onChequebook(id:number){
    console.log("Chequebook");
    console.log(id);
    localStorage.removeItem("local_sid");
    localStorage.setItem("local_sid",id.toString());
    this.r.navigate(['chequebook']);

 }
 onDisputedTrans(id:number){
   console.log("Disputed_Transection");
   console.log(id);
   localStorage.removeItem("local_sid");
   localStorage.setItem("local_sid",id.toString());
   this.r.navigate(['disputed-transaction']);
 }
 onAddOnCard(id:number){
   console.log("Add-On_Card");
   console.log(id);
   localStorage.removeItem("local_sid");
   localStorage.setItem("local_sid",id.toString());
   this.r.navigate(['add-card']);
 }
 onLostStolenCard(id:number){
   console.log("Lost_Stolen_Card");
   console.log(id);
   localStorage.removeItem("local_sid");
   localStorage.setItem("local_sid",id.toString());
   this.r.navigate(['lost-stolen-card']);
 }
 onCreditLimit(id:number){
   console.log("Increase_Credit_Limit");
   console.log(id);
   localStorage.removeItem("local_sid");
   localStorage.setItem("local_sid",id.toString()); 
   this.r.navigate(['credit-limit']);
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


  public incriment(){
    this.request.i=(this.request.i)+1;
    return this.request.i
  }
  public resetvalue(){
    this.request.i=0;
  }


}
