import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/personne';
import {EmbaucherService} from '../embaucher.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;

  constructor(private embaucherService: EmbaucherService) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.embaucherService.embaucher(this.personne);
  }
  retirer(){
    this.embaucherService.debaucher(this.personne);
  }
}
