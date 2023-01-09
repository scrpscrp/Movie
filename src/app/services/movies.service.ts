import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataInterface } from '../Interface/DataInterface';

@Injectable({
  providedIn: 'root',
})
export class MvoviesService {
  private APIkey: string = environment.APIkey;
  private UrlMovie: string = environment.UrlMovie;

  constructor(private http: HttpClient) {}

  getTopRateMovie(): Observable<DataInterface> {
    return this.http.get<DataInterface>(
      `${this.UrlMovie}top_rated?${this.APIkey}&language=en-US&page=1`
    );
  }

  getPopularMovie(): Observable<DataInterface> {
    return this.http.get<DataInterface>(
      `${this.UrlMovie}popular?${this.APIkey}&language=en-US&page`
    );
  }

  getUpcomingMovie(): Observable<DataInterface> {
    return this.http.get<DataInterface>(
      `${this.UrlMovie}upcoming?${this.APIkey}&language=en-US&page`
    );
  }
  getNowplayingMovie(): Observable<DataInterface> {
    return this.http.get<DataInterface>(
      `${this.UrlMovie}now_playing?${this.APIkey}&language=en-US&page`
    );
  }

  
}
