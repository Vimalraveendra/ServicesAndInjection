import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output()createAccount =new EventEmitter<{name:string,status:string}>()

  constructor(private loggingService:LoggingService){}
 
  onCreateAccount(accountName:string,accountStatus:string){
      this.createAccount.emit({
        name:accountName,
        status:accountStatus
      });
     this.loggingService.logStatusChanged(accountStatus)
  }
}
