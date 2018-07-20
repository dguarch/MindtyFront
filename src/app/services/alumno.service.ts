import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TagPlaceholder } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { tap } from 'rxjs/operators';
import { error } from '../../../node_modules/@angular/compiler/src/util';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private _alumnosCargados:Usuario[];
  private _apiAlumnos:string='http://localhost:8080/mindtyapirest/api/usuarios/3';
  private _alumnosObs:Observable<Usuario[]>;

  constructor(private _httpClient:HttpClient) { }
    getAlumnoFromApi(): Observable<Usuario[]> {

      if(this._alumnosCargados){
        this._alumnosObs=of(this._alumnosCargados);
      }else if(this._alumnosObs){
        
      }else{
        this._alumnosObs = this._httpClient.get<Usuario[]>(this._apiAlumnos)
        .pipe(
          tap(
            data=>{
              this._alumnosCargados=data;
              localStorage.setItem('usuario',JSON.stringify(this._alumnosCargados));
            },
            error=>console.log('error',error)
    
          )
        );
      }
      return this._alumnosObs;
    
    }
  }
  
