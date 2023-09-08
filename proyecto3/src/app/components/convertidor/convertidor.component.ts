import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  monedaOriginal = 'USD';
  monedaDestino = 'EUR';
  total = 0;

  listaMonedas: string[] = ['USD', 'EUR', 'GTQ'];

  realizarConversion(){
    console.log("Convertiendo");

    switch(this.monedaOriginal) {
      case 'USD':
        if(this.monedaDestino === 'USD'){
          this.total = this.cantidad;
        } else if(this.monedaDestino === 'EUR'){
          this.total = this.cantidad * 0.92;
        } else if(this.monedaDestino === 'GTQ'){
          this.total = this.cantidad * 7.88;
        } else{
          this.total = this.cantidad;
        }
        break;
      case 'EUR':
        if(this.monedaDestino === 'USD'){
          this.total = this.cantidad * 1.10;
        } else if(this.monedaDestino === 'EUR'){
          this.total = this.cantidad;
        } else if(this.monedaDestino === 'GTQ'){
          this.total = this.cantidad * 9.50;
        } else{
          this.total = this.cantidad;
        }
        break;
      case 'EUR':
        if(this.monedaDestino === 'USD'){
          this.total = this.cantidad * 0.13;
        } else if(this.monedaDestino === 'EUR'){
          this.total = this.cantidad * 0.11;
        } else if(this.monedaDestino === 'GTQ'){
          this.total = this.cantidad;
        } else{
          this.total = this.cantidad;
        }
        break;
      default:
        break;
    }
  }
}
