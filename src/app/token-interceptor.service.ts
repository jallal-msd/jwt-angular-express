import { Injectable } from '@angular/core';
import {DbApiService} from './services/db-api.service';
import { Observable, throwError } from 'rxjs';
import { HttpRequest,
  HttpHandler,
  HttpHeaders,  
  HttpEvent,
  HttpInterceptor} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor {

  constructor(private db:DbApiService) { }

 intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    
    const authToken = this.db.getToken();

    const authReq = req.clone({ setHeaders: { Authorization: `bearer ${authToken}` } });

     return next.handle(authReq);
    

  }
}

