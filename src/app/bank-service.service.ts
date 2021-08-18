import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  constructor(private http:HttpClient) { }

  public login(data:any){
    return this.http.post("http://localhost:4444/abcbank/getEmployeeField",data)
  }


  public getRequestList(){
    return this.http.get("http://localhost:4444/abcbank/getRequestList")
  }




  public getChequebookDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getChequebookDataById/"+Id);
  }

  public getAddOnCardDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getAddOnCardDataById/"+Id);
  }

  public getDisputedTransactionDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getDisputedTransactionDataById/"+Id);
  }

  public getLostStolenCardDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getLostStolenCardDataById/"+Id);
  }

  public getCreditLimitDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getCreditLimitDataById/"+Id);
  }



  
  public updateChequebook(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateChequebook",data);
  }

  public updateAddOnCard(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateAddOnCard",data);
  }

  public updateDisputedTransaction(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateDisputedTransaction",data);
  }

  public updateCreditLimit(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateCreditLimit",data);
  }

  public updateLostStolenCard(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateLostStolenCard",data);
  }




 //=================================================Query List==============================================

  public getQueryList(){
    return this.http.get("http://localhost:4444/abcbank/getQueryList");
  }
  
  public getQueryDetailsById(Id:number){

    return this.http.get("http://localhost:4444/abcbank/getQueryDataById/"+Id);
  }

  public updateQuery(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateQueryData",data);
  }


  //==========================================Bill Payment========================================


  public getBillPaymentDetails(){
    return this.http.get("http://localhost:4444/abcbank/getBillPaymentDetails");
  }


  public updateAccountBalance(data:any){
    return this.http.put("http://localhost:4444/abcbank/updateAccountBalance",data);
  }



}
