import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;
  @Output() delPerson = new EventEmitter<number>(); 
  
  @Output() editPerson = new EventEmitter<Person>(); 
  edit: boolean;
  constructor() { }

  ngOnInit() {
    this.edit = false;
  }
  onDeletePerson () {
    this.delPerson.emit(this.inPerson.id);
  }

  onEditPerson(firstname: string = this.inPerson.firstname, lastname: string = this.inPerson.lastname) {
    if (firstname !== "" && lastname !== "") {
      let person = new Person(firstname, lastname, this.inPerson.id);
      this.editPerson.emit(person);
      this.editSwitch();
    }
  }
  
  editSwitch() {
    this.edit = !this.edit;
  }
}
