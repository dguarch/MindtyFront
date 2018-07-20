import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../services/modulos.service';
import { Modulo } from '../modelos/modulo';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  modulos: Modulo[];
  idCurso: number;

  constructor(private _ModulosService: ModulosService, private _route: ActivatedRoute) { }

  ngOnInit() {

<<<<<<< HEAD


    this._route.params.subscribe(receivedParams => {
      this.idCurso = receivedParams['idc'];
      
      this._ModulosService.getModulosFromApi(this.idCurso).subscribe(modulosLeidos => {
        this.modulos = modulosLeidos;
        console.log(this.modulos)
      })
    })


      
    }
=======
    this._ModulosService.getTareasFromApi().subscribe(modulosLeidos=>{
      this.modulos=modulosLeidos;
      console.log(this.modulos)
    });
  }
>>>>>>> d8d4f3f0802e075e2870c53c938cb074cb9f443a

}

