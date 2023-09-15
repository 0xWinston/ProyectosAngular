import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent {
  form: FormGroup;
  cargando = false;
  titulo = "Agregar tarjeta de crédito";
  id:string | undefined;

  constructor(private fb: FormBuilder,
    private tarjetaService: TarjetaService,
    /*private toastr: ToastrService*/){
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
        fechaExpiracion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
      })
  }

  crearTarjeta(){

  }
}
