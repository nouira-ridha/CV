import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }
}
