import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjetaEdit  = new Subject<any>();
  constructor(private firestore:AngularFirestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise<any>{
    return this.firestore.collection('tarjetas').add(tarjeta);
  }
}
