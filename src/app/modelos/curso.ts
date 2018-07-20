import { Modulo } from "./modulo";
import { Usuario } from "./usuario";

export class Curso{
    idCurso:number;
    codCurso:string;
    nombreCurso:string;
    horasCurso:string;
    formador:Usuario;
    modulo:Modulo[];

    constructor(idCurso:number,codCurso:string,nombreCurso:string, horasCurso:string,
        formador:Usuario,modulo:Modulo[]){

    }
}