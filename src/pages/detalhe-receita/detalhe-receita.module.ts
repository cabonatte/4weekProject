import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheReceitaPage } from './detalhe-receita';

@NgModule({
  declarations: [
    DetalheReceitaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheReceitaPage),
  ],
})
export class DetalheReceitaPageModule {}
