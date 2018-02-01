import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {
  
  receitas = [
    {produto: "Strogonoff", img:"assets/imgs/Produto Sweet.png", tempo:"30min", dificuldade:"3"},
    {produto: "Lasanha", img:"assets/imgs/Produto Sweet.png", tempo:"50min", dificuldade:"3"},
    {produto: "Tacos", img:"assets/imgs/Produto Sweet.png", tempo:"10min", dificuldade:"2"},
    {produto: "Escondidinho", img:"assets/imgs/Produto Sweet.png", tempo:"30min", dificuldade:"1"},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitasPage');
  }

}
