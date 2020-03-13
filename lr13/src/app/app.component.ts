import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];

  firstnameFilter: boolean;
  lastnameFilter: boolean;
  searchFirst = "";
  searchLast = "";
  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person('Dima', 'Ivanov',"8(909) 000-0000", 1));
    this.persons.push(new Person('Sasha', 'Fedorov', "8(909) 000-0000", 2));
    this.persons.push(new Person('Kolya', 'Korolev', "8(909) 000-0000", 3));
    this.persons.push(new Person('Ivan', 'Ivanov', "8(909) 000-0000", 4));
    this.persons.push(new Person('Kostya', 'Shishkin', "8(909) 000-0000", 5));
  }

  ngOnDestroy(): void {
  }

  searchFirstName() {
    this.firstnameFilter = !this.firstnameFilter;
    this.searchFirst = "";
  }

  searchLastName() {
    this.lastnameFilter = !this.lastnameFilter;
    this.searchLast= "";
  }
  onAddPerson(person: Person) {
    if(person.firstname!="" && person.lastname!=""){ 
      if(this.persons.length==0){
        person.id=1;
      }
      else 
        person.id=this.persons[this.persons.length - 1].id + 1;
      
      this.persons.push(person);
    }
  }

  test(even) {
    console.log(event);
  }

  onDeletePerson(del_id: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find(index => index.id == del_id)), 1);
  }

  onEditPerson(person: Person) {
    Object.assign (this.persons.find(index => index.id === person.id), person);
  }

}
