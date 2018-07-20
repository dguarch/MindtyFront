import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Usuario } from '../../modelos/usuario';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuariodetalle',
  templateUrl: './usuariodetalle.component.html',
  styleUrls: ['./usuariodetalle.component.css']
})
export class UsuariodetalleComponent implements OnInit {
  unUsuario: Usuario;
  idUsuario:number;
  usuario: Usuario; 
  private _apiUsuarios: string = 'http://localhost:9090/mindtyapirest/api/usuarios';
  private _usuariosObs: Observable<Usuario>;

  constructor( private _usersService:UserserviceService,private _route:ActivatedRoute) { }
  
  ngOnInit() {
    this._route.params.subscribe(receivedParams=>{
      this.idUsuario=receivedParams['idu'];
      this.unUsuario=this._usersService.getUserById(this.idUsuario);
    })
  }
  

}
  