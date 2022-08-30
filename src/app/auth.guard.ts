import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {DbApiService} from './services/db-api.service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private db:DbApiService , 
                        private _router:Router){}
  canActivate():boolean{

    if(this.db.loggedin()){
      return true;
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
  }
   
  
  

