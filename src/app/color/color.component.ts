import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = 'red';
  color2 = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(input){
    console.log(input.value);
    this.color = input.value;
    input.value = '';
  }
  processReq(message: any){
    alert(message);
  }
}
