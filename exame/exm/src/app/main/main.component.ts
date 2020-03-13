import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  notes: any = [{}];
  sortParam: string;
  filterParam: string;
  now = new Date();
  time_now = `${this.now.getFullYear()}-${this.now.getMonth()+1 <10 ? `0${this.now.getMonth()+1}`: this.now.getMonth()+1}-${this.now.getDate()}`;


  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit() {
    this.notes =  await this.http.getNotes();
  }

  async onDelete(id){
    await this.http.deleteNotes(id);
    this.notes = await this.http.getNotes();
  }

  dateValid(dataEnd){
    if(Number(String(dataEnd).split('-').join(''))< Number(String(this.time_now).split('-').join('')))
      return true;
    else 
      return false;
  }

}
