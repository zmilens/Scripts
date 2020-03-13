import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';
import {PersonService} from "./shared/services/person.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: any;

  firstnameFilter: boolean;
  lastnameFilter: boolean;
  searchFirst = "";
  searchLast = "";
  constructor(private personService: PersonService) {
  }

  async ngOnInit() {
    try {
      let getpersons = this.personService.getPerson();
      this.persons = (isNullOrUndefined(await getpersons)) ? [] : await getpersons;
    } catch (err) {
        console.log(err);
    }
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
  async onAddPerson(person: Person) {
    if(person.firstname!="" && person.lastname!=""){ 
      if(this.persons.length==0){
        person.id=1;
      }
      else 
        person.id=this.persons[this.persons.length - 1].id + 1;
      
      this.persons.push(person);
    }
    try {
      await this.personService.postPerson({
        firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    } catch (e) {
        console.error(e);
    }
  }

  test(even) {
    console.log(event);
  }

  async onDeletePerson(del_id: number) {
    this.persons.splice(this.persons.indexOf(this.persons.find(index => index.id == del_id)), 1);
    try {
      await this.personService.deletePerson(del_id);
    } catch (e) {
        console.error(e);
    }
  }

  async onEditPerson(person: Person) {
    Object.assign (this.persons.find(index => index.id === person.id), person);
    try {
      await this.personService.putPerson(person.id, {
      firstname: person.firstname, lastname: person.lastname, phone: person.phone});
    } catch (e) {
        console.error(e);
    }
  }
}
