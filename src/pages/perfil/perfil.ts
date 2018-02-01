import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialPage } from '../social/social';
import { ReceitaSalvaPage } from '../receita-salva/receita-salva';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  irParaSocial(){
    this.navCtrl.push(SocialPage);
  }

  irReceitaSalva(){
    this.navCtrl.push(ReceitaSalvaPage);
  }
}
