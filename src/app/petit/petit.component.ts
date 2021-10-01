import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-petit',
  templateUrl: './petit.component.html',
  styleUrls: ['./petit.component.css']
})
export class PetitComponent implements OnInit {
@Input() petitProperty;
@Output() envoyerDemandeAMonPere = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.petitProperty)
  }
  envoyerDemande() {
this.envoyerDemandeAMonPere.emit(
  ' je peux avoire de l.argent ?'
);

}


}
