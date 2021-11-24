import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';
import {PremierService} from '../../premier.service';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(private premierService: PremierService, private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getPersonne().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('probléme d\'acées aux API, les données affichées sont fake');
        console.log(error);
        this.personnes = this.cvService.getFakePersonne();

      }
    );
    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);
  }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }
}
