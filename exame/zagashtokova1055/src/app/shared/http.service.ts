import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API } from './API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {
  header: HttpHeaders;
  url= "students";

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.header = new HttpHeaders();
   }

   async getStudents(){
    return this.get(this.url, this.header).toPromise();
  }

  async postStudents(data){  //новая запись
    return this.post(this.url, data, this.header).toPromise();
  }

  
  async putStudents(id: number, data) {  //обновление записи
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deleteStudents(id) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }

  async getStudentById(id){
    return this.get (`${this.url}/${id}`, this.header).toPromise();
  }
}
