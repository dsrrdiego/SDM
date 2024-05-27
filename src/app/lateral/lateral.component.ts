import { Component } from '@angular/core';
import { ServicioGeneralService } from '../servicio-general.service';
import { Empleado } from '../empleado/Empleado';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrl: './lateral.component.scss'
})

export class LateralComponent {
 
  // miListaDeEmpleados:Empleado[]=[]; Cuando se usa el observable sin el pipe
  miListaDeEmpleados$: Observable<Empleado[]>=new Observable<Empleado[]>();;


  constructor(private servicio: ServicioGeneralService){
    // servicio.empleadosAContratar.subscribe((c)=>this.miListaDeEmpleados=c); 
    // comentado porque esta reemplazado por pipe en HTML
    this.miListaDeEmpleados$=servicio.empleadosAContratar.asObservable();
  }
}
