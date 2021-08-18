import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public isLogedIn=false;
  public getLoginStatus(){
      return this.isLogedIn;
  }
  public setLoginStatus(value:boolean){
      this.isLogedIn=value;
  }




}
