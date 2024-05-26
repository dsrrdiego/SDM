import { Component, Input, OnInit } from '@angular/core';
import {Empleado } from '../empleado/Empleado'

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  Constructor(){}

  @Input()
  e: Empleado={
    "nombre":"Pepe1",
    "dni":2921,
    "rubro":"Electricista",
    "precio":31,
    "img":'assets/plomero1.webp',
  disponible: false,
  cantidad:0,
};

  ngOnInit():void {}

  botonMenos(e:Empleado):void {
    e.cantidad--;
  }
  botonMas(e:Empleado):void {
    e.cantidad++;
  }
  anteUnCambio(event:any, e:Empleado ): void{
  alert(event.code);
    // event.preventDefault();
  }
}
