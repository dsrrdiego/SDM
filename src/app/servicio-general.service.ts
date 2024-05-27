import { Injectable } from '@angular/core';
import { Empleado } from './empleado/Empleado';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/**
 * Logica para el Carro de Comparas
 */
export class ServicioGeneralService {
  private _empleadosAContratar: Empleado[]=[];
  empleadosAContratar:BehaviorSubject<Empleado[]>=new BehaviorSubject(this._empleadosAContratar);


  agregar(e:Empleado){
    let item:Empleado| undefined=this._empleadosAContratar.find((value)=>value.nombre==e.nombre);
    if (!item){
    this._empleadosAContratar.push(e);
    this.empleadosAContratar.next(this._empleadosAContratar); //es el Notify del ovbserver
  }
    
  }
  constructor() { 
    

  }
}
