import { Component } from '@angular/core';
import { ServicioGeneralService } from '../servicio-general.service';


@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.scss'
})

export class LateralComponent {
  empleados=this.servicio.empleadosAContratar;
  constructor(private servicio: ServicioGeneralService){}
}
