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

  cancelar(emp:Empleado){
    // this._empleadosAContratar.remove(e);
    emp.disponible=true;
    this._empleadosAContratar = this._empleadosAContratar.filter(e => e.dni !== emp.dni);
    this.empleadosAContratar.next(this._empleadosAContratar); //es el Notify del ovbserver

    // people = people.filter(person => person.id !== idToRemove);
  }
  agregar(e:Empleado){
    let item:Empleado| undefined=this._empleadosAContratar.find((value)=>value.nombre==e.nombre);
    if (!item){
    e.disponible=false
    this._empleadosAContratar.push(e);
    this.empleadosAContratar.next(this._empleadosAContratar); //es el Notify del ovbserver
  }
    
  }
  constructor() { 
    

  }
}
