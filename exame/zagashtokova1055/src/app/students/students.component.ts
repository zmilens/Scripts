import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any = [{}]; //массив объектов
  filter: string;
  sorting: string;

  constructor(private http: HttpService ) { }

  async ngOnInit() {
    this.students = await this.http.getStudents();
  
  }

}
