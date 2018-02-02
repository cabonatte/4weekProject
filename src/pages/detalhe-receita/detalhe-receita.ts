import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosReceitasProvider } from '../../providers/dados-receitas/dados-receitas';
import { SocialSharing } from '@ionic-native/social-sharing';

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

  detalheReceita;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dadosReceitas: DadosReceitasProvider, private compartilhar: SocialSharing) {
    this.detalheReceita = this.navParams.get('produto');
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheReceitaPage');
  }

}
