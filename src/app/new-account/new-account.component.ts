import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output()createAccount =new EventEmitter<{name:string,status:string}>()
 
  onCreateAccount(accountName:string,accountStatus:string){
      this.createAccount.emit({
        name:accountName,
        status:accountStatus
      });
  }
}
