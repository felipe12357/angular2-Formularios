import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  forma:FormGroup;
  genero=[
    "Masculino",
    "Femenino",
    "Empresas"
  ];
  usuario:any={
    nombre:"Andrés Felipe",
    apellido:"Tamayo",
    correo:"atamayo@mail.com",
    pasatiempos:[""],
    sexo:"",
    contrasena1:"",
    contrasena2:""
  };
  constructor() {
    this.forma=new FormGroup({
      //valor por defecto, reglas de validacion, reglas asincronas
      'nombre':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'apellido':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'correo':new FormControl('',[Validators.required,
                                  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasatiempos':new FormArray([new FormControl('',Validators.required)]),
      'sexo':new FormControl('',[Validators.required]),
      'contrasena1':new FormControl('',[Validators.required]),
      'contrasena2':new FormControl()
    });

    //Esta validacion toca implmentarla de esta forma para poder enviar el contexto(this) por medio de bind
    this.forma.controls['contrasena2'].setValidators([
      Validators.required,
      this.validarContrasenas.bind(this.forma)
    ]);

    this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  validarContrasenas(control:FormControl):any{
    if(control.value!==this.controls['contrasena1'].value){
      return{
        validarcontrasenas:true
      }
    }
    return  null;
  }
  guardarCambios(){
    //this.forma.reset("");
    console.log(this.forma.value);
    console.log(this.forma);
    //console.log(this.forma.get('correo'));
    //console.log(this.forma.get('pasatiempos'));
  }
  agregarPasatiempo(){
    //console.log(this.forma.controls['pasatiempos'].controls);
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('',Validators.required)
     );
  }
}
