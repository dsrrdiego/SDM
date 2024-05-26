import { Component, Input, Output,EventEmitter,OnInit } from '@angular/core';
import {Empleado } from '../empleado/Empleado'

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
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
  botonMas():void {
    this.cantidad++;
    if (this.cantidad==11) this.maximo.emit("maximo alcanzado");
    this.cantidadChange.emit(this.cantidad);

  }
  anteUnCambio(event:any): void{
    // console.log(this.cantidad);
    this.cantidadChange.emit(this.cantidad);

    
    // event.preventDefault();
  }
}
