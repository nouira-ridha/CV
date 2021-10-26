import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/personne';
import {EmbaucherService} from '../embaucher.service';

@Component({
  selector: 'app-embaucher',
  templateUrl: './embaucher.component.html',
  styleUrls: ['./embaucher.component.css']
})
export class EmbaucherComponent implements OnInit {
  personnes: Personne[];

  constructor(private embaucherService: EmbaucherService) { }

  ngOnInit(): void {
    this.personnes = this.embaucherService.getEmboucher();
  }

}
