import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/personne';
import {EmbaucherService} from '../embaucher.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;

  constructor(private embaucherService: EmbaucherService,
              private router: Router) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.embaucherService.embaucher(this.personne);
  }
  retirer(){
    this.embaucherService.debaucher(this.personne);
  }
  moreInfo(){
    const link = ['cv', this.personne.id];
      this.router.navigate(link);
  }
}
