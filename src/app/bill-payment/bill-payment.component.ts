import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit {

  public billPaymentData:any=[];

 


  constructor(private billobj:BankServiceService,private r:Router,private authObj:AuthService) { }

  ngOnInit(): void {
    this.checkValidSession();

    this.fetchBillPayment();
   

  }

  public fetchBillPayment(){
    this.billobj.getBillPaymentDetails().subscribe((result:any)=>{
      this.billPaymentData=result
    })
  }

  public data={
    "accountNumber":"",
    "billAmount":"",
    "billerId":"",
    "billStatus":""
}

  public billPay(accountNumber:any,billAmount:any,billerId:any,billStatus:any){

      this.data.accountNumber=accountNumber;
      this.data.billAmount=billAmount;
      this.data.billerId=billerId;
      this.data.billStatus=billStatus;
      this.billobj.updateAccountBalance(this.data).subscribe((result:any)=>{
          if(result['status']==200)
          {
            alert(result['message'])
            this.r.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.r.navigate(['bill-payment']);
          });
          
          }
          else{
            alert(result['message'])
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
