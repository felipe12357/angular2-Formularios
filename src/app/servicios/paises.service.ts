import { Injectable } from '@angular/core';

@Injectable()
export class PaisesService {
  private paises=[
      {
        codigo:"COL",
        nombre:"Colombia"
      },{
        codigo:"ESP",
        nombre:"España"
      },{
        codigo:"CRI",
        nombre:"Costa Rica"
      },{
          codigo:"FR",
          nombre:"Francia"
      },{
          codigo:"ARG",
          nombre:"Argentina"
      }
    ];

  constructor() { }

  getPaises(){
    return this.paises;
  }

}
