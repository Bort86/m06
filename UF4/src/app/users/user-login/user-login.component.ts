import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserDataService } from
  '../services/user-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userConnected: User;
  users: User[];
  validUserData: boolean = true;

  constructor(private userDateService: UserDataService) { }

  ngOnInit() {
    this.userConnected = new User();
  }

  connection(){

    this.userDateService.userConnection
      (this.userConnected).subscribe(
        outPutData => {
          if(Array.isArray(outPutData) && outPutData.length>0){
            if(outPutData[0]==true){
              alert("Login Ok");
            }else{
              alert("Error ins UserLoginComponent (connection): outputData is not an array " + JSON.stringify(outPutData));
            }
          }
        },
        error => {
          console.log("Error in user connection" + JSON.stringify(error));
        }
      )
  }

}
