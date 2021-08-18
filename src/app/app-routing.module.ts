import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { ChequebookComponent } from './chequebook/chequebook.component';
import { CreditLimitComponent } from './credit-limit/credit-limit.component';
import { DisputedTransactionComponent } from './disputed-transaction/disputed-transaction.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LostStolenCardComponent } from './lost-stolen-card/lost-stolen-card.component';
import { MenuComponent } from './menu/menu.component';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryResponseComponent } from './query-response/query-response.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'request-list',component:RequestListComponent},
  {path:'add-card',component:AddCardComponent},
  {path:'chequebook',component:ChequebookComponent},
  {path:'disputed-transaction',component:DisputedTransactionComponent},
  {path:'lost-stolen-card',component:LostStolenCardComponent},
  {path:'credit-limit',component:CreditLimitComponent},
  {path:'query-list',component:QueryListComponent},
  {path:'query-response',component:QueryResponseComponent},
  {path:'bill-payment',component:BillPaymentComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path :'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
