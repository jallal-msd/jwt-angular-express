import { Component, OnInit ,Input } from '@angular/core';
import {DbApiService} from  '../services/db-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(public  db:DbApiService) { }

  ngOnInit(): void {
  //  this.loggedIn = this.db.loggedin();
  }
}
