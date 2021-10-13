import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
usm = false;
barca = true;
liverpool = false;
nomEquipe = '';
  constructor() { }

  ngOnInit(): void {
  }
  changeToUsm(){
    this.usm = true;
    this.barca = false;
    this.liverpool = false;
    this.nomEquipe = 'USM ya dawla';
  }
  changeToBarca(){
    this.usm = false;
    this.barca = true;
    this.liverpool = false;
    this.nomEquipe = 'Barca Barca !!';

  }
  changeToLiverpool(){
    this.usm = false;
    this.barca = false;
    this.liverpool = true;
    this.nomEquipe = 'Liverpool you\'ll never walk alone';
  }
}
