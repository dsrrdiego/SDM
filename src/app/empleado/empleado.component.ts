import { Component } from '@angular/core';
import { Empleado } from './Empleado';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})

export class EmpleadoComponent {
  empleado: Empleado[]=[{
    "nombre":"Pepe1",
    "dni":2921,
    "rubro":"Electricista",
    "precio":31,
    "img":'assets/plomero1.webp',
  disponible: false,
  cantidad:10,
},
    {"nombre":"Pepe2",
    "dni":2922,
    "rubro":"Albañil",
    "precio":232,
    "img":'assets/plomero1.webp',
    disponible: true,
  cantidad:5,

  },
    
    {"nombre":"Pepe3",
    "dni":2923,
    "rubro":"Gasista",
    "precio":2233,
    "img":'assets/plomero1.webp',
    disponible: false,
  cantidad:3,

  }]
    
 
    
}
