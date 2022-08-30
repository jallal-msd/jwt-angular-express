import { Component, OnInit } from '@angular/core';
import {DbApiService} from  '../services/db-api.service';
import { HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  Players:any = [];

  constructor(private db:DbApiService, private _router: Router) { }

  ngOnInit(): void {
    console.log("YELLOW")
    this.getPlayerList()
  }

  getPlayerList(){

   return  this.db.getData().subscribe(data=>{this.Players = data},
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/login'])
          }

        }

      }
    );}
}
