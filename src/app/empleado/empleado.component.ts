import { Component } from '@angular/core';
import { Empleado } from './Empleado';
import { ServicioGeneralService } from '../servicio-general.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})

export class EmpleadoComponent {

 maximo(m: String){
  alert(m);
 }

  // console.log('aa');
agregar(e:Empleado){  
  this.servicio.agregar(e);
}

// lateral:ServicioGeneralService;
empleado:Empleado[]=[];
constructor (private servicio: ServicioGeneralService, private apiService: ApiService){
}

ngOnInit():void{
  // this.empleado=this.apiService.empleado;
   this.apiService.getAll().subscribe(e=>this.empleado=e);
  //  this.apiService.getAll().subscribe(e=>console.log(e));
  //  console.log('aa');
   
 }
 
    
}
