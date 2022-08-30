import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import {DbApiService} from '../services/db-api.service';
import {Router} from  '@angular/router' 



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new user();
message:any = " " ;

  constructor(private db:DbApiService, private _router:Router) { }

  ngOnInit(): void {

  }
  register(){
   return  this.db.Register(this.user).subscribe((res:any)=>{

      console.log(res)
      localStorage.setItem('token' , res.token)
      this._router.navigate(['/']);
   }

   );}}
