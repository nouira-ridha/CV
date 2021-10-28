import { Component, OnInit } from '@angular/core';
import {PremierService} from '../premier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {
  color = 'red';
  color2 = 'blue';
  constructor(private premierService: PremierService,
              private router: Router) { }

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
  loggerMesData(){
    this.premierService.logger('test si ça marche');
  }
  goToCv(){
    const link = ['cv'];
    this.router.navigate(link);
  }
  goToNgClass(){
    const link = ['class'];
    this.router.navigate(link);
  }
  goToNgStyle(){
    const link = ['style'];
    this.router.navigate(link);
  }
  goToPetit(){
    const link = ['petit'];
    this.router.navigate(link);
  }
}
