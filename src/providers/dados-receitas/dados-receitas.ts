import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DadosReceitasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosReceitasProvider {
  receitas = [
    {produto: "Pizza", img:"assets/imgs/receitas/pizza.jpeg", tempo:"1h10", nRate:"3200", rate:[1,2,3,4,5], serve:4, calorias:"800kcal/prato", ingredientes: "assets/imgs/receitas/ingre_salada.jpg", descri:"Pizza é uma delícia em qualquer ocasião. Esse pizza da Easycooking é de dar água na boca",favorito:true},
    {produto: "Mix de folhas com Frango", img:"assets/imgs/receitas/salada.jpg", tempo:"30min", nRate:"2990", rate:[1,2,3,4], serve:2, calorias:"400kcal/prato", ingredientes: "assets/imgs/receitas/ingre_salada.jpg", descri:"Deliciosa salada de frango com um mix de folhas frescas e de qualidade",favorito:false},
    {produto: "Wrap de Frango a 4 Folhas", img:"assets/imgs/receitas/wrap.jpeg", tempo:"50min", nRate:"3000", rate:[1,2,3,4], serve:2, calorias:"500kcal/prato", ingredientes: "assets/imgs/receitas/ingre_wrap.jpg", descri:"Wrap gostoso!!!!", favorito:false},
    {produto: "Ravioli Bolonhesa", img:"assets/imgs/receitas/pasta.jpeg", tempo:"30min", nRate:"3100", rate:[1,2,3,4,5], serve:2, calorias:"600kcal/prato", ingredientes: "assets/imgs/receitas/ingre_salada.jpg", descri:"Hmmm que ravioliiii. Você nunca comeu nada igual", favorito:false},
    {produto: "Escondidinho", img:"assets/imgs/receitas/escondidinho.jpeg", tempo:"30min", nRate:"2890", rate:[1,2,3,4,5], serve:4, calorias:"750kcal/prato", ingredientes: "assets/imgs/receitas/ingre_escondidinho.jpg", descri:"Esconde a fome de maneira gostosa, literalmente", favorito:true},
  ]
 

  // constructor(public http: HttpClient) {
  //   console.log('Hello DadosReceitasProvider Provider');
  // }

}
