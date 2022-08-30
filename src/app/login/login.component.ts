import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import {Router} from  '@angular/router' 
import {DbApiService} from '../services/db-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new user();
  constructor(private  db:DbApiService,
                    private _router:Router) { }

  ngOnInit(): void {
  }

login(){
      
    return  this.db.login(this.user).subscribe((res:any) => {
      console.log(res)
      localStorage.setItem('token',res.token )
      this._router.navigate(['/']);

    }, (err)=>console.log(err));

 }
}
