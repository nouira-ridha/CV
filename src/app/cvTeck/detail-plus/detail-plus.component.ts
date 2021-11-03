import { Component, OnInit } from '@angular/core';
import {CvService} from "../cv.service";
import {ActivatedRoute} from "@angular/router";
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-detail-plus',
  templateUrl: './detail-plus.component.html',
  styleUrls: ['./detail-plus.component.css']
})
export class DetailPlusComponent implements OnInit {
  personne: Personne;

  constructor(private cvService: CvService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params.id);
      }
    );
  }

}
