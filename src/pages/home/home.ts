import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { ReceitasPage } from '../receitas/receitas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irParaPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  irParaReceita(){
    this.navCtrl.push(ReceitasPage);
  }
}