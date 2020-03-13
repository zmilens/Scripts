import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  note;
  id:number;
  disabled = false;

  constructor(
    private http: HttpService,
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { 
    this.activeRouter.params.subscribe( param => {
      this.id = param.id
    })
    console.log(this.id);
  }

  ngOnInit() {
    this.getNote().then( () => {
      this.editForm = new FormGroup(
        {
          
          dataEnd: new FormControl({value: this.note.dataEnd, disabled: this.disabled}),
          content: new FormControl({value: this.note.content, disabled: this.disabled}),
        }
      )
    }) 
    console.log(this.note);
  }

  async getNote(){
    try{
    this.note = await this.http.getNoteById(this.id);
    }catch(e){
      console.log(e);
    }
    
  }

  async edit(){
    await this.http.putNotes(this.id, {
      dataEnd: this.editForm.value.dataEnd,
      content: this.editForm.value.content
    });
    this.router.navigate(['/']);
  }
}
