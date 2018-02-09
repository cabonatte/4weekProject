import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosReceitasProvider } from '../../providers/dados-receitas/dados-receitas';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { HttpClient } from '@angular/common/http';

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
  
  // comentario = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public dadosReceitas: DadosReceitasProvider, private compartilhar: SocialSharing) { 
    //ADICIONAR public http: HttpClient
    this.detalheReceita = this.navParams.get('produto');
    
  }

  // inserir(){
  //   this.http.post('http://45.55.53.12:3000/clientes', this.comentario)
  //     .subscribe((dados) =>{
  //       console.log(dados)
  //     });
  
  //   console.log('coisa');
  //   console.log(this.comentario);
  // }


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
