import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private tarjetaEdit  = new Subject<any>();
  constructor(private firestore:AngularFirestore) { }
}
