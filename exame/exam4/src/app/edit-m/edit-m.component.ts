import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router, ActivatedRoute } from '@angular/router'; // хранит url адрес и параметры

@Component({
  selector: 'app-edit-m',
  templateUrl: './edit-m.component.html',
  styleUrls: ['./edit-m.component.css']
})
export class EditMComponent implements OnInit {
  mothers: any = [{}];
  editmotherForm: FormGroup;
  id: number;
  mother;
  disabled: false;
  constructor(
    private http: HttpService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { 
     this.activeRouter.params.subscribe(param => {  //Все методы сервиса HttpClient возвращают 
      //тип Observable. Это означает, что если при вызове метода, 
      //который должен сделать HTTP-запрос, не вызвать метод subscribe(), то ничего не произойдет.
       this.id=param.id
     })
  }

  ngOnInit(): void {
    this.getMother().then( () => {
      this.editmotherForm = new FormGroup(
        {
          name: new FormControl({value: this.mother.name, disabled: this.disabled}), 
          price: new FormControl({value: this.mother.price, disabled: this.disabled}), 
          article: new FormControl({value: this.mother.article, disabled: this.disabled}),
          chipset: new FormControl({value: this.mother.chipset, disabled: this.disabled}), 
          formfactor: new FormControl({value: this.mother.formfactor, disabled: this.disabled})
        })
    })
  }

  async getMother(){
    try{
      this.mother = await this.http.getMotherById(this.id);
    } catch(e){
        console.log(e);
      }
    }

  async edit(){
    await this.http.putMothers(this.id, this.editmotherForm.value);
    this.router.navigate(['/mothers']);
  }
  
  async onDelete(){
    await this.http.deleteMothers(this.id);
    this.router.navigate(['/mothers']);
  }

}
