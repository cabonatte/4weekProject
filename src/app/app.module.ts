import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PerfilPage } from '../pages/perfil/perfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceitasPageModule } from '../pages/receitas/receitas.module';
import { DetalheReceitaPageModule } from '../pages/detalhe-receita/detalhe-receita.module';
import { SocialPage } from '../pages/social/social';
import { ReceitaSalvaPage } from '../pages/receita-salva/receita-salva';

import { Camera, CameraOptions } from '@ionic-native/camera'; //API Camera


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    SocialPage,
    ReceitaSalvaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReceitasPageModule,
    DetalheReceitaPageModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    SocialPage,
    ReceitaSalvaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
