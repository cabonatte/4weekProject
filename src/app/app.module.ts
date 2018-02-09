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
import { LoginPage } from '../pages/login/login';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { DadosReceitasProvider } from '../providers/dados-receitas/dados-receitas'; //API Camera
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    SocialPage,
    ReceitaSalvaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReceitasPageModule,
    DetalheReceitaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    SocialPage,
    ReceitaSalvaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    DadosReceitasProvider,
    SocialSharing
  ]
})
export class AppModule {}
