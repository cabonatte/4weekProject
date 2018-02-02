import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosReceitasProvider } from '../../providers/dados-receitas/dados-receitas';

/**
 * Generated class for the ReceitaSalvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receita-salva',
  templateUrl: 'receita-salva.html',
})
export class ReceitaSalvaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dadosReceitas: DadosReceitasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitaSalvaPage');
  }

  
}
