import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucherService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmboucher(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index < 0){
      this.personnes.push(personne);
    }else {
      alert(`${personne.name} ${personne.firstname} est déjà sélectionnée`);
    }
  }
  debaucher(personne): void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0){
      this.personnes.splice(index, 1);
    }
  }
}
