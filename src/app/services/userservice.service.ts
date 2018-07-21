import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ErrorHandler} from '@angular/core';



@Injectable()
export class UserserviceService {
  private http: HttpClient;
  private _usuariosStore: Usuario[];
  private _apiUsuarios: string = 'http://localhost:8080/mindtyapirest/api/usuarios';
  private _usuariosObs: Observable<Usuario[]>;

  constructor(private _httpClient: HttpClient) { }

  getUsersFromApi(): Observable<Usuario[]> {

    if (this._usuariosStore) {
      this._usuariosObs = of(this._usuariosStore);
    } else if (this._usuariosObs) {
      //observable ya está en curso
    } else {
      this._usuariosObs = this._httpClient.get<Usuario[]>(this._apiUsuarios)
        .pipe(
          tap(
            data => {
              this._usuariosStore = data;
              localStorage.setItem('proyectos', JSON.stringify(this._usuariosStore));
            },
            error => console.log('error:', error)
          )
        );
    }
  
    return this._usuariosObs;
  }

  addUsuarioToApi(nuevoUser: Usuario): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
           })
    };

    return this._httpClient.post<number>(this._apiUsuarios, nuevoUser, httpOptions)
      .pipe(
        tap(
          data => {
            nuevoUser.idu = data;
            this._usuariosStore.push(nuevoUser);
          },
          error => console.log('error:', error)
        )
      );
  }
 
  
/** DELETE: delete the hero from the server */

    
deleteUsuarioToApi (idu: number): Observable<{}> {
  console.log(idu,"el idu, en  delete -userservice- entrando")
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
         })
  };
      console.log(idu,"el idu, en  delete -userservice- cabecera generada")
  const url = `${this._apiUsuarios}/${idu}`; // DELETE api/usuario/x
  
  console.log(url, "la url para eliminar y pasamos a -component-  ");
  
  // return this._httpClient.delete(url, httpOptions)
     
 
  return this._httpClient.delete<number>(this._apiUsuarios, httpOptions)
      .pipe(
        tap(
          data => {  
            // this._usuariosStore.push(url);
          },
          error => console.log('error:', error)
        )
      );  
}



  getUserById(idu: number): Usuario {
    return this._usuariosStore.find((aU: Usuario) => (aU.idu == idu));
  }


 
    
}
