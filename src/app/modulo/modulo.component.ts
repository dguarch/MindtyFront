import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../services/modulos.service';
import { Modulo } from '../modelos/modulo';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  modulos:Modulo[];

  constructor(private _ModulosService:ModulosService) { }

  ngOnInit() {

    this._ModulosService.getTareasFromApi().subscribe(modulosLeidos=>{
      this.modulos=modulosLeidos;
    });
  }

}
