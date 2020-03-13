import {Component} from '@angular/core';

class Sensor {
    public id: number;
    public name: string;
    public status: boolean;
    constructor (id:number, name: string, status=true){
        this.name=name;
        this.id=id;
        this.status=status;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['.app.component.css']
})

export class AppComponent{
    title='my-project';
    someNumber=100;
    someAnotherNumber=200;
    flag=false;
    enble=true;
    myValue:string;
    sensor1: Sensor;
    
    constructor(){
        this.sensor1=new Sensor(1, 'левый датчик сверху');
        for (let i=0; i<10; ++){
            this.sensors
                .push(new Sensor(i, 'Название', Math.random()>0.5))
        }
    }   
}