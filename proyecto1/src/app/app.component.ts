import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1';
  dadoIzquierdo = '../assets/Recursos/dice1.png';
  dadoDerecho = '../assets/Recursos/dice2.png';
  numero1: number = 0;
  numero2: number = 0;

  jugar() {
    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;

    this.dadoIzquierdo = '../assets/Recursos/dice' + this.numero1 + ".png";
    this.dadoDerecho = '../assets/Recursos/dice' + this.numero2 + ".png";
  }
}
