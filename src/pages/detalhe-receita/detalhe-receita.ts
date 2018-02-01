import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-receita',
  templateUrl: 'detalhe-receita.html',
})

export class DetalheReceitaPage {

  receitaNaTela;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.receitaNaTela = this.navParams.get('produto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheReceitaPage');
  }

}
