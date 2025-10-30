import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  
  courseName: string = 'Angular20';
  isActive: boolean = false;
  currentDate: Date = new Date();
  rollNo: number = 123;
  minTextLength=12;
  spanClassName = 'secondary';

  constructor() {
    console.log(this.courseName);

    this.courseName = 'Angular20 POC';
    console.log(this.courseName);

    setTimeout(() => {
      this.rollNo = 6666;
      }, 10000);
  }


  showAlert(){
    alert('Welcome to Angular 20');
  }

  onCityChange(){
    alert('City Changed');
  }

  onWindowSizeChange(){
    console.log('Window Size changed');
  }

  onMouseEnter(){
    console.log('Mouse In');
    
  }
}
