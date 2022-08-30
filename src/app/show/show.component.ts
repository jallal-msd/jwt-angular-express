import { Component, OnInit } from '@angular/core';
import {DbApiService} from '../services/db-api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
loggedin!:boolean;
  public name :any = []; 

  constructor(private db:DbApiService) { }

  ngOnInit(): void {
    this.loggedin = this.db.loggedin();
    this.db.getData().subscribe(data => this.name = data);
  }




}
