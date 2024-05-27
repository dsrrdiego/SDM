import { Injectable } from '@angular/core';
import { Empleado } from './empleado/Empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



const  URL="https://66549fcf1c6af63f4678bd6a.mockapi.io/SDM/getAll";
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  
    
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Empleado[]>{
      return this.http.get<Empleado[]>(URL).pipe(
        tap((empleados:Empleado[])=>empleados.forEach(e => {
          e.dni+=Math.floor(Math.random()*1000);
        }))
      );
  }
  
}
