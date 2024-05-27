import { Injectable } from '@angular/core';
import { Empleado } from './empleado/Empleado';


@Injectable({
  providedIn: 'root'
})

/**
 * Logica para el Carro de Comparas
 */
export class ServicioGeneralService {
  empleadosAContratar:Empleado[]=[];


  agregar(e:Empleado){
    let item:Empleado| undefined=this.empleadosAContratar.find((value)=>value.nombre==e.nombre);
    if (!item){
    this.empleadosAContratar.push(e);
  }
    console.log(this.empleadosAContratar);
    
  }
  constructor() { 
    

  }
}
