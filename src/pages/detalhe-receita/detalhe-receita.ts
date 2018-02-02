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

  fbShare(fbmsg){
    this.compartilhar.shareViaFacebook(fbmsg.produto, fbmsg.img, null).then( () =>{
      console.log("Mensagem enviada");
    }).catch((error)=>{
      console.log("Cannot open Facebook");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheReceitaPage');
  }

}
