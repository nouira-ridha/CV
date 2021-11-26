import { Component, OnInit } from '@angular/core';
import {CvService} from "../cv.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-detail-plus',
  templateUrl: './detail-plus.component.html',
  styleUrls: ['./detail-plus.component.css']
})
export class DetailPlusComponent implements OnInit {
  personne: Personne;

  constructor(private cvService: CvService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (personne) => {
            this.personne = personne;
          }
        );
      }
    );
  }
  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (personne) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        alert("probleme de connexion");
        console.log(error);
      }
    );
  }
}
