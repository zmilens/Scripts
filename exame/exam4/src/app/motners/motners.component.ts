import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';


@Component({
  selector: 'app-motners',
  templateUrl: './motners.component.html',
  styleUrls: ['./motners.component.css']
})
export class MotnersComponent implements OnInit {

  mothers: any = [{}]; //массив объектов
  filterM: string;
  sortM: string;
  mother;
  arr:  [];
  str: string;
  constructor(private http: HttpService) {
    
   }

  async ngOnInit() {
    this.mothers = await this.http.getMothers();

  }

}
