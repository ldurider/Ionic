import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  nombre='Hola';
  pass='';
  constructor(public navCtrl: NavController) {

  }

  validarFormulario(formulario){

    console.log(formulario);

  }

}
