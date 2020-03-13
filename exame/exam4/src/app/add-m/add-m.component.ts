import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router'; // этот сервис используется для навигации

@Component({
  selector: 'app-add-m',
  templateUrl: './add-m.component.html',
  styleUrls: ['./add-m.component.css']
})
export class AddMComponent implements OnInit {

  motherForm: FormGroup;
  disabled: false;

  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.motherForm =  new FormGroup(
      {
        name: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        price: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        article: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        chipset: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        formfactor: new FormControl({value:'', disabled: this.disabled}, [Validators.required])
      }
    )
  }

  async add(){
    await this.http.postMothers(this.motherForm.value)
    this.router.navigate(['/mothers']); //программная навигация
  }

}
