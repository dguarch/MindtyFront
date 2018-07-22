import { Injectable } from '@angular/core';
import { Modulo } from '../modelos/modulo';
import { Observable } from '../../../node_modules/rxjs';

import { TagPlaceholder } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { tap } from 'rxjs/operators';
import { error } from '../../../node_modules/@angular/compiler/src/util';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ModulosService {
  private _modulosCargados:Modulo [];
  private _apiModulos:string='http://localhost:8080/mindtyapirest/api/cursos/2/modulos';

  private _ModulosObs:Observable<Modulo[]>;


  constructor(private _httpClient:HttpClient) { }

  getModulosFromApi(idCurso:number): Observable<Modulo[]> {

  if(this._modulosCargados){
    this._ModulosObs=of(this._modulosCargados);
  }else if(this._ModulosObs){
    
  }else{
    this._ModulosObs = this._httpClient.get<Modulo[]>(this._apiModulos+ idCurso + "/modulos")
    .pipe(
      tap(
        data=>{
          this._modulosCargados=data;
          localStorage.setItem('modulos',JSON.stringify(this._modulosCargados));
        },
        error=>console.log('error',error)

      )
    );
  }
  return this._ModulosObs;

}



}
