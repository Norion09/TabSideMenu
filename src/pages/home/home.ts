import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { MoviedetailsPage } from '../moviedetails/moviedetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[
    MovieProvider
  ]
})

export class HomePage {
  public lista_filmes = new Array<any>();// lista de filmes
  public page = 1;

  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public http: HttpClient,
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
    this.loadingMovie();
  }
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true
    this.loadingMovieUp();
  }
  /*IonViewDidEnter(newpage: boolean = false){
    this.presentLoading();

  }*/
  loadingMovie(newpage: boolean = false){
    this.presentLoading();
    this.movieProvider.getMovie(this.page).subscribe(
    data =>{
      const response = (data as any);

      console.log(data);
      if(newpage){
        this.lista_filmes = this.lista_filmes.concat(response.results);
        this.infiniteScroll.complete();
      }else{
        this.lista_filmes = response.results;
      }

      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.closeLoading();
    },error => {
      console.log(error + "   2");
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.closeLoading();
    });
  }
  loadingMovieUp(){
    this.movieProvider.getMovie().subscribe(
    data =>{
      const response = (data as any);
      console.log(data);

      this.lista_filmes = response.results;

      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    },error => {
      console.log(error + "   2");
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }
  openDetails(filme){
    console.log(filme);
    this.navCtrl.push(MoviedetailsPage, {id: filme.id});
  }
  doInfinite(infiniteScroll) {
    this.page++
    this.infiniteScroll = infiniteScroll
    this.loadingMovie(true);
  }
}
