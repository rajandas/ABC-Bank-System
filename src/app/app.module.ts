import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RequestListComponent } from './request-list/request-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ChequebookComponent } from './chequebook/chequebook.component';
import { DisputedTransactionComponent } from './disputed-transaction/disputed-transaction.component';
import { LostStolenCardComponent } from './lost-stolen-card/lost-stolen-card.component';
import { CreditLimitComponent } from './credit-limit/credit-limit.component';
import { QueryListComponent } from './query-list/query-list.component';
import { QueryResponseComponent } from './query-response/query-response.component';
import { BillPaymentComponent } from './bill-payment/bill-payment.component';
import { FormsModule } from '@angular/forms';
import { BankServiceService } from './bank-service.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    RequestListComponent,
    AddCardComponent,
    ChequebookComponent,
    DisputedTransactionComponent,
    LostStolenCardComponent,
    CreditLimitComponent,
    QueryListComponent,
    QueryResponseComponent,
    BillPaymentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BankServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


