import { Injectable } from '@angular/core';
import {Personne} from '../model/personne';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  link = 'http://localhost:3000/api/personnes';
  private personnes: Personne[];

  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'nouira', 'ridha', 36, 'ridha.jpg', 77777777, 'developpeur'),
      new Personne(2, 'waer', 'ahlem', 35, 'ahlem.jpg', 66666666, 'pharmacienne'),
      new Personne(3, 'test', 'pipe', 12, '', 44444444, 'testPipe'),
  ];
  }
  getPersonne(): Observable <Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }
  getFakePersonne(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(this.link + `/${id}`);
  }
  addPersonne(personne: Personne): Observable<any> {
    return this.http.post(this.link, personne);
  }
  deletePersonne(id: number): Observable<any>{
    return this.http.delete(this.link + `/${id}`);
  }
  /*getFakePersonneById(id: number): Personne {
    const personne = this.personnes.find(personne => {
      return personne.id == id;
    });
    return personne;
  }*/
  /*addFakePersonne(personne: Personne): void {
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }*/
}
