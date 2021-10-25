import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';
import {PremierService} from '../../premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(private premierService: PremierService) { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'nouira', 'ridha', 36, 'ridha.jpg', 77777777, 'developpeur'),
      new Personne(2, 'waer', 'ahlem', 35, 'ahlem.jpg', 66666666, 'pharmacienne'),
      new Personne(3, 'test', 'pipe', 12, '', 44444444, 'testPipe'),
    ];
    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);

  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }
}
