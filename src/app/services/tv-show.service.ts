import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tvShowDataInterface } from '../Interface/tvShow-data.interface';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  private APIkey: string = environment.APIkey;
  private UrlTvShow: string = environment.UrlTvShow;

  constructor(private http: HttpClient) {}

  getTvShow(): Observable<tvShowDataInterface> {
    return this.http.get<tvShowDataInterface>(
      `${this.UrlTvShow}popular?${this.APIkey}&language=en-US&page=1`
    );
  }
}
