import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private autentification: AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }
login(credentials){
    console.log(credentials);
    this.autentification.login(credentials).subscribe(
      (response) => {
        const token = (<any>response).id;
        const link = ['cv'];
        localStorage.setItem('token', token);
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
}
}
