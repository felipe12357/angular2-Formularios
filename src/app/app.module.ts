import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateComponent } from './componentes/template/template.component';
import { DataComponent } from './componentes/data/data.component';

import {PaisesService} from './servicios/paises.service';


import {APP_ROUTING} from './app.routes';
import { MenuComponent } from './componentes/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
