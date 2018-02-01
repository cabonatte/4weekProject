import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheReceitaPage } from '../detalhe-receita/detalhe-receita';

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
    {produto: "Pizza", img:"assets/imgs/receitas/pizza.jpeg", tempo:"1h10", nRate:"3200"},
    {produto: "Mix de folhas com Frango", img:"assets/imgs/receitas/salada.jpg", tempo:"30min", nRate:"2990"},
    {produto: "Wrap de Frango a 4 Folhas", img:"assets/imgs/receitas/wrap.jpeg", tempo:"50min", nRate:"3000"},
    {produto: "Ravioli Bolonhesa", img:"assets/imgs/receitas/pasta.jpeg", tempo:"30min", nRate:"3100"},
    {produto: "Escondidinho", img:"assets/imgs/receitas/escondidinho.jpeg", tempo:"30min", nRate:"2890"},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  irParaDetalheReceita(item){
    this.navCtrl.push(DetalheReceitaPage, {produto: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitasPage');
  }

}
