import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class DbApiService {
  host = "http://localhost:3000/api/players";
  constructor(private http: HttpClient , private _router : Router) { }


  getData(){

    return this.http.get<any>(this.host);
  }

  insertData(data:any){

    return this.http.post('http://localhost:3000/api/add',data );
  }

  Register(data:any){

    return this.http.post('http://127.0.0.1:3000/api/register',data );

  }

    login(data:any){
      
    return this.http.post('http://127.0.0.1:3000/api/login',data );
    
  }

    loggedin(){
    return  !!localStorage.getItem('token')
    
  }

  getToken(){
    return  localStorage.getItem('token')
    
  }
   logout(){
    localStorage.removeItem('token')
     this._router.navigate(['/']);
  }
}
