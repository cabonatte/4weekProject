import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceitaSalvaPage } from './receita-salva';

@NgModule({
  declarations: [
    ReceitaSalvaPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceitaSalvaPage),
  ],
})
export class ReceitaSalvaPageModule {}
