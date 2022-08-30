import { Component, OnInit } from '@angular/core';
import { player } from '../player';
import {DbApiService} from '../services/db-api.service';


@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.css']
})
export class PlayerComponentComponent implements OnInit {

players= new player() ;



  constructor(private db:DbApiService) { }

  ngOnInit(): void {

  }

  insertData(){
    return this.db.insertData(this.players).subscribe(res=>console.log(res));

  }


}
