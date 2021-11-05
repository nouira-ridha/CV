import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() {
    this.personnes = [
      new Personne(1, 'nouira', 'ridha', 36, 'ridha.jpg', 77777777, 'developpeur'),
      new Personne(2, 'waer', 'ahlem', 35, 'ahlem.jpg', 66666666, 'pharmacienne'),
      new Personne(3, 'test', 'pipe', 12, '', 44444444, 'testPipe'),
  ];
  }
  getPersonne(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    const personne = this.personnes.find(personne => {
      return personne.id == id;
    });
    return personne;
  }
 // addPersonne()
}
