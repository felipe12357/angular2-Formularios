import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {ActivatedRoute} from '@angular/router';
import {PaisesService} from '../../servicios/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  variableGet:any="";
  usuario={
    nombre:null,
    apellido:null,
    correo:null,
    pais:"",
    genero:"Masculino",
    acepta:""
  };

  genero=[
    "Masculino",
    "Femenino",
    "Empresas"
  ];
  termino:string="texto de pruebas";
  paises=[];

  constructor(private _ActivatedRoute:ActivatedRoute,
              private _PaisesService:PaisesService) {
                this.paises=_PaisesService.getPaises();
              }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params=>{
      this.variableGet=params.testParam;
      console.log(params);
    });
  }

  validar(forma:NgForm){
    //console.log("en la validacion");
    console.log(forma);
    //console.log(forma.controls.apellido.errors);
    //console.log(forma.value);
  }

}
