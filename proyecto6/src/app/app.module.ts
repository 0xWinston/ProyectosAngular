import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToastrModule} from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import { CrearTarjetaComponent } from './components/crear-tarjeta/crear-tarjeta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/app/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarjetaComponent,
    CrearTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
