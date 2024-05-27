import { Component } from '@angular/core';
import { Empleado } from './Empleado';
import { ServicioGeneralService } from '../servicio-general.service';
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
    
 maximo(m: String){
  alert(m);
 }

  // console.log('aa');
agregar(e:Empleado){  
  this.servicio.agregar(e);
}

// lateral:ServicioGeneralService;
constructor (private servicio: ServicioGeneralService){
  // console.log('aa');
  // this.agrergar(this.empleado[0]);
  
  // this.lateral =new ServicioGeneralService();
 }
    
}
