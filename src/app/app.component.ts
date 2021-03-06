import { Component, ViewChild } from '@angular/core';//alt
import { Platform, Nav } from 'ionic-angular';//alt
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  @ViewChild(Nav) public nav: Nav; //alt

  public pages =[
    {titulo: "Perfil", compoment: PerfilPage},
    {titulo: "Sobre", compoment: SobrePage}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.push(page.compoment);
  }
}
