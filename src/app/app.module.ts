import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { PerfilComponent } from './header/perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { CopyComponent } from './footer/copy/copy.component';
import { CursoComponent } from './curso/curso.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ModulonewComponent } from './modulo/modulonew/modulonew.component';
import { ModulodetalleComponent } from './modulo/modulodetalle/modulodetalle.component';
import { CursodetalleComponent } from './curso/cursodetalle/cursodetalle.component';
import { CursonewComponent } from './curso/cursonew/cursonew.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarionewComponent } from './usuario/usuarionew/usuarionew.component';
import { UsuariodetalleComponent } from './usuario/usuariodetalle/usuariodetalle.component';
import { LoginComponent } from './login/login.component';
import {routingProv} from './routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    PerfilComponent,
    FooterComponent,
    CopyComponent,
    CursoComponent,
    ModuloComponent,
    ModulonewComponent,
    ModulodetalleComponent,
    CursodetalleComponent,
    CursonewComponent,
    UsuarioComponent,
    UsuarionewComponent,
    UsuariodetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routingProv
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }