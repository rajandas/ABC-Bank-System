import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {

  // public isStatus=true;
  public queryList:any=[];
  public i:any=1;

  constructor(private queryobj:BankServiceService, private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {
    this.checkValidSession();

    this.fetchQueries();
  }


  public query={

    "i":1,
    "status":""
  }

  public fetchQueries(){
    this.queryobj.getQueryList().subscribe((result:any)=>this.queryList=result);
    
  }

  onQuery(id:number){
    console.log("Query");
    console.log(id);
    localStorage.removeItem("local_sid");
    localStorage.setItem("local_sid",id.toString());
    this.r.navigate(['query-response']);

 }


//  public queryResponse={
//   "status":"",
//   "rejection":""
// }
// method1(){
//   if(this.queryResponse.status=="Rejected"){
//     this.isStatus=false;
//   }
//   else{
//     this.queryResponse.rejection="";
//     this.isStatus=true;
//   }

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

  
  public incriment(){
    this.query.i=(this.query.i)+1;
    return this.query.i
  }
  public resetvalue(){
    this.query.i=0;
  }

}
