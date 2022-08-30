import { Component ,OnInit} from '@angular/core';
import {DbApiService} from './services/db-api.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    
  public name :any = []; 

  constructor(private db:DbApiService,) { }


  ngOnInit(): void {
   
    this.db.getData().subscribe(data => this.name = data);
  }


}
