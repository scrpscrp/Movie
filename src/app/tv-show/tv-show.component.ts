import { TvShow } from './../Interface/tvshow.interface';
import { tvShowDataInterface } from '../Interface/tvShow-data.interface';

import { Movie } from '../Interface/movie.interface';
import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit {
  tvShow: TvShow[] = [];
  params: string = '';
  title: string = '';
  pageCount: number = 1;

  constructor(
    private TvShowService: TvShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute() {
    this.route.queryParams.subscribe((params) => {
      if (params['order']) {
        this.params = params['order'];

        switch (this.params) {
          case 'popular':
            this.title = 'Popular';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
                console.log(this.tvShow);
              }
            );
            break;
          case 'airing_today':
            this.title = 'Airing today';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
            break;
          case 'on_the_air':
            this.title = 'On Tv';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
            break;
          case 'top_rated':
            this.title = 'Top Rated';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
        }
      }
    });
  }
  loadMore() {
    this.pageCount++;
    this.TvShowService.getTvShow(this.params, this.pageCount).subscribe(
      (data: tvShowDataInterface) => {
        this.tvShow.push(...data.results);
      }
    );
  }
}
