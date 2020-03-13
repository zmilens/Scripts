import { Component } from '@angular/core';
import { Sensor } from './shared/models/sensor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  sensors: Sensor[] = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.sensors.push(new Sensor(i, "Датчик " + i));
    }
    console.log(this.sensors)
  }
  onDeleteSensor(index: number) {
    this.sensors.splice(index, 1);
  }
  addSensor(name, status) {
    let newId;
    if(this.sensors.length==0){
      newId=1;
    }
    else{
      newId = this.sensors[this.sensors.length - 1].id + 1;
    }
    this.sensors.push(new Sensor(newId, name.value, status.checked))
  }


}
