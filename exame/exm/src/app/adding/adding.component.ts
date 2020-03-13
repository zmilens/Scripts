import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  noteForm: FormGroup;
  now = new Date();
  disabled: false;

  constructor(
    private http: HttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.noteForm = new FormGroup(
      {
        dataEnd: new FormControl({value:'', disabled: this.disabled}, [Validators.required]),
        content: new FormControl({value:'', disabled: this.disabled}, [Validators.required,  Validators.pattern("^[0-9]{0,}")])
      }
    )
  }

  async add(){
    await this.http.postNotes(
      {
        dataAdd: `${this.now.getFullYear()}-${this.now.getMonth()+1 <10 ? `0${this.now.getMonth()+1}`: this.now.getMonth()+1}-${this.now.getDate()}`,
        dataEnd: this.noteForm.value.dataEnd,
        content: this.noteForm.value.content
      })
      this.router.navigate(['/']);
  }

}
