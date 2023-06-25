import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  constructor(private router: Router){

  }

  RemoverTelaLogin() {
    const windowLogin = document.getElementById('login');

    windowLogin!.classList.remove('login-in');
    windowLogin!.classList.add('login-out');
    windowLogin!.style.animation = 'none';

    setTimeout(() => windowLogin!.style.animation = '', 5); 
    setTimeout(() => windowLogin!.style.display = 'none', 400); 
    setTimeout(() => this.router.navigate(['/grafico-vendas']), 450);   
    setTimeout(() => document.getElementById('navbar')!.style.visibility = 'visible', 200);
  }
}


