import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formAdd: FormGroup;
  disabled: false;

  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formAdd = new FormGroup(
      {
        surname: new FormControl({value:'', disabled: this.disabled}, [Validators.required, Validators.pattern("^[A-Za-zА-Яа-яЁё]{1,}")]),
        name: new FormControl({value:'', disabled: this.disabled}, [Validators.required, Validators.pattern("^[A-Za-zА-Яа-яЁё]{1,}")]),
        middlename: new FormControl({value:'', disabled: this.disabled}, [Validators.required, Validators.pattern("^[A-Za-zА-Яа-яЁё]{1,}")]),
        number: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        email: new FormControl({value:'', disabled: this.disabled}, [Validators.required, Validators.pattern("^[A-Za-z0-9._-]{0,}@[A-Za-z]{0,}.[A-Za-z]{2,3}")]),
        data: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        group: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        direction: new FormControl({value:'', disabled: this.disabled}, [Validators.required, Validators.pattern("^[A-Za-zА-Яа-яЁё]{1,}")]),
      })
    }
      async add(){
        await this.http.postStudents(this.formAdd.value)
        this.router.navigate(['/students']);
      }
}


