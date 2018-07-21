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
  usuarios: Usuario[]; 


  private _apiUsuarios: string = 'http://localhost:8080/mindtyapirest/api/usuarios';
  private _usuariosObs: Observable<Usuario>;

  constructor( private _usersService:UserserviceService,private _route:ActivatedRoute) { }
 
  
  ngOnInit() {
    this._route.params.subscribe(receivedParams=>{
      this.idUsuario=receivedParams['idu'];
      this.unUsuario=this._usersService.getUserById(this.idUsuario);
    })
  }
  delete(usuario: Usuario): void {

    console.log("entrando en eliminando usuario, -usuariodetalle.component-");
    console.log(usuario, "el usaurio");
    console.log(this.usuarios, "el usaurios, un array");
    console.log(usuario.idu, "el idu del usuario");

    // this.usuarios = this.usuarios.filter(h => h !== usuario);
    this._usersService.deleteUsuarioToApi(usuario.idu).subscribe();

    console.log("eliminando usuario despues de pasar por -service- estamos otra vez en -usuariodetalle.component-");
    console.log(usuario, "el usaurio");
    console.log(this.usuarios, "el usaurios, un array");
    console.log(usuario.idu, "el idu del usuario");
   
  }

}
  