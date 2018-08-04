import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable}from 'rxjs/RX'

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
    username:"",
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
      'username':new FormControl('',[Validators.required],this.existeUsuario),
      'contrasena1':new FormControl('',[Validators.required]),
      'contrasena2':new FormControl()
    });

    //De esta forma cada vez que cambio algun valor en el Formulario
    //se ejecuta algun codigo
    this.forma.valueChanges.subscribe(data=>{
      console.log(data);
    })
    //y asi cuando solo cambie el campo nombre
    this.forma.controls['nombre'].valueChanges
    .subscribe(data=>{
        console.log(data);
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

  existeUsuario(control:FormControl):Promise<any>|Observable<any>{
    let promesa=new Promise(
      (resolve,reject)=>{
        setTimeout( ()=>{
          if(control.value==="felipe12357"){
            resolve({existe:true})
          }else
            resolve(null)
        },3000);
      }
    )
    return promesa;
  }

  validarContrasenas(control:FormControl):any{
    let formaLocal:any=this;
    // console.log("en la validacion");
    // console.log(this);
    if(control.value!==formaLocal.controls['contrasena1'].value){
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
