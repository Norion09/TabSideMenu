import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenPhotoPage } from '../open-photo/open-photo';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // Variável responsável por guardar a lista de imagens
  images: any[] =[];
  // Variável responsável por guardar a imagem selecionada
  zoomedImage: any;
  selectedImage: any;

  constructor(
    public navCtrl: NavController
  ) {
    // Lista de imagens criada a partir de um placeholder, você deve substituir aqui pela sua lista que pode vir de um provider
    for (var _i = 10; _i < 70; _i++) {
      this.images.push({
        id: _i,
        image_path: 'https://picsum.photos/100/100?image=' + _i
      })
    }
  }

  // Método responsável por setar na variável "zoomedImage" a imagem selecionada
  zoomImage(img) {
    if (this.zoomedImage =! null && this.zoomedImage == img) { // Necessário para remover a marcação da imagem caso clique na mesma
      this.zoomedImage = null;
    }else {
      this.zoomedImage = img;
    }
  }

  openImage(img){
    this.navCtrl.push(OpenPhotoPage);
  }
}
