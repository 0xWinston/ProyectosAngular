import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  nombreTarea = '';
  listaTareas: Tarea[] = [];

  nuevaTarea() {
    console.log(this.nombreTarea);
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  actualizarTarea(tarea: Tarea, index: number) {
    this.listaTareas[index].estado = !tarea.estado;
  }

  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);
  }
}
