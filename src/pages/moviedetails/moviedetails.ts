import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the MoviedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
  providers: [
    MovieProvider
  ]
})
export class MoviedetailsPage {
  public filme;
  public filmeid;
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController,) {
  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }
  closeLoading(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetail(this.filmeid).subscribe(data=>{
      this.presentLoading();
      let retorno = (data as any);
      if(typeof retorno != 'object'){
        retorno = JSON.parse(retorno._body);
      }
      this.filme  = retorno;
      console.log(this.filme);
      this.closeLoading();
    },err =>{
      console.log(err);
      this.closeLoading();
    });
    console.log("filme id recebido: " + this.filmeid);
  }
}
/*    let retorno = (data as any)._body;
      console.log(retorno);

      this.filme = retorno;
      console.log(this.filme); */
