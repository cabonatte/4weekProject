import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialPage } from '../social/social';
import { ReceitaSalvaPage } from '../receita-salva/receita-salva';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  edicaoPerfil = false;
  escondeDado = true;
  perfil = {
    nome:'Luisa Gonçalves',
    email: 'luizagoncalves@gmail.com',
    telefone: '(11) 98877-8877',
    plano: 'Famila: Serve 4 pessoas'

  };


  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  editarPerfil(){
    if(this.edicaoPerfil == false){ 
      this.edicaoPerfil = true;
      this.escondeDado = false;
    }
    
   
  }

  salvarPerfil(){
      console.log("funciona porra")
    if(this.edicaoPerfil == true){ 
      this.edicaoPerfil = false;
      this.escondeDado = true;
    }
    
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

  irParaCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}