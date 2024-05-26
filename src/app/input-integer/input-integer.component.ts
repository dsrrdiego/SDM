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
  cantidad: number=0;
  

  ngOnInit():void {}

  botonMenos():void {
    this.cantidad--;
  }
  botonMas():void {
    this.cantidad++;
  }
  anteUnCambio(event:any): void{
    console.log(this.cantidad);
    
    // event.preventDefault();
  }
}
