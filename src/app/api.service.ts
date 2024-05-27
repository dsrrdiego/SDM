import { Injectable } from '@angular/core';
import { Empleado } from './empleado/Empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



// const  URL="https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers";
const  URL="https://emergespringboot.onrender.com/album";
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  empleado: Empleado[]=[
    {
    "nombre":"Pepe1",
    "dni":2921,
    "rubro":"Electricista",
    "precio":31,
    "img":'assets/plomero1.webp',
  disponible: false,
  cantidad:10,
},
    {"nombre":"Pepe2",
    "dni":2922,
    "rubro":"Albañil",
    "precio":232,
    "img":'assets/plomero1.webp',
    disponible: true,
  cantidad:5,

  },
    
    {"nombre":"Pepe3",
    "dni":2923,
    "rubro":"Gasista",
    "precio":2233,
    "img":'assets/plomero1.webp',
    disponible: false,
  cantidad:3,

  }];
    
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Empleado[]>{
      return this.http.get<Empleado[]>(URL).pipe(
        tap((empleados:Empleado[])=>empleados.forEach(e => {
          e.nombre="pepe";
        }))
      );
  }
  
}
