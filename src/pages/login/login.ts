import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
dados={};
logins;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    
   
  this.http.get('http://35.227.56.19/usuarios').subscribe(
   
    (dados) => {
      this.logins = dados;
     if(dados) {
     }
  }
  )}
  
  
  
  
  abrirTela(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  mostrarImg = true;
  focusForm() {
    this.mostrarImg = false;
  }
  unFocusForm(){
    this.mostrarImg = true;
  }

}
