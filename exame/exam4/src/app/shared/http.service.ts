import { Injectable } from '@angular/core';
import {API} from './API';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'  //доступен во всем приложении
})
export class HttpService extends  API{

  header: HttpHeaders;
  url = "mothers";
  
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  this.header= new HttpHeaders();

   }
  
  async getMothers(){
    return this.get(this.url, this.header).toPromise();
  }

  async postMothers(data){  //новая запись
    return this.post(this.url, data, this.header).toPromise();
  }

  
  async putMothers(id: number, data) {  //обновление записи
    return this.put (`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deleteMothers(id) {
    return this.delete (`${this.url}/${id}`, this.header).toPromise();
  }

  async getMotherById(id){
    return this.get (`${this.url}/${id}`, this.header).toPromise();
  }
}
