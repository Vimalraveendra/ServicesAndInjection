import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-injection';
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onCreateAccount(newAccount:{name:string,status:string}){
     this.accounts.push(newAccount)
  }
  onStatusChanged(updateStatus:{id:number,status:string}){
     this.accounts[updateStatus.id].status=updateStatus.status;
  }
}
