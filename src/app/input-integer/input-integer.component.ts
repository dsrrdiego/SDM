import { Component, Input, Output,EventEmitter,OnInit } from '@angular/core';
import {Empleado } from '../empleado/Empleado'
const MAXIMO=10;
@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  Constructor(){}

  @Input()
  cantidad: number=0;

  @Output()
cantidadChange: EventEmitter<number> =new EventEmitter<number>();
  
@Output() maximo: EventEmitter<String>=new EventEmitter<String>();

  ngOnInit():void {}

  botonMenos():void {
    if (this.cantidad<=0) this.maximo.emit("Debe ser mayor o igual a 0");
    else{
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
  }
  botonMas():void {
    if (this.cantidad>=MAXIMO) this.maximo.emit("maximo alcanzado");
    else{
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }

  }
  anteUnCambio(event:any): void{
    if (this.cantidad>=MAXIMO) this.maximo.emit("maximo alcanzado");
    else{
    this.cantidadChange.emit(this.cantidad);
    }
    
    // event.preventDefault();
  }
}
