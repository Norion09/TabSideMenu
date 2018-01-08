import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getMovie(page = 1){
    return this.http.get(this.baseApiPath+ `/movie/popular?page=${page}&api_key=3d6e0a73196c51860383d9b142890317`);
  }
  getMovieDetail(filme){
    return this.http.get(this.baseApiPath+ `/movie/${filme}?api_key=3d6e0a73196c51860383d9b142890317`);
  }
}
