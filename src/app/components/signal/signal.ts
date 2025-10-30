import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  courseName: string = "Angular";

  angularVersion = signal('20');
  courseDuration = signal<string>('2 Months');

  cityList = signal<string[]>(["Pune","Goa"]);

  studentObj = signal<any>({
    name:'ABC',
    city:'Pune'
  })

  changeDuration(){
    this.courseName= "React";
    this.courseDuration.set('3 Months');
  }

  addCity(cityName:string){
    this.cityList.update((old: string[])=>[...old, cityName])
  }

  changeCity(){
    this.studentObj.update((oldObj:any)=>({...oldObj, city:'Sangli'}))

    this.studentObj.set({
      name:'AAA',
      city:'Kolhapur'
    })
  }
}
