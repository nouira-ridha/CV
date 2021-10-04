import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'nouira', 'ridha', 36, 'ridha.jpg', 77777777, 'developpeur'),
      new Personne(2, 'waer', 'ahlem', 35, 'ahlem.jpg', 66666666, 'pharmacienne')
    ];
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }
}
