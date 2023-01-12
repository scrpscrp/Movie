import { TvShow } from './../Interface/tvshow.interface';
import { tvShowDataInterface } from '../Interface/tvShow-data.interface';

import { Movie } from '../Interface/movie.interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  filterTvShow: TvShow[] = [];

  constructor(
    private TvShowService: TvShowService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkRoute();
    this.TvShowService.getGenres().subscribe((genres) => console.log(genres));
    this.filterTvShow = this.tvShow;
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
            this.resetFilter();
            break;
          case 'airing_today':
            this.title = 'Airing today';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
            this.resetFilter();
            break;
          case 'on_the_air':
            this.title = 'On Tv';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
            this.resetFilter();

            break;
          case 'top_rated':
            this.title = 'Top Rated';
            this.TvShowService.getTvShow(this.params).subscribe(
              (data: tvShowDataInterface) => {
                this.tvShow = data.results;
              }
            );
            this.resetFilter();
            break;
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
    if (this.filterTvShow.length) {
      this.filterGenres();
    }
  }
  filterGenres() {
    this.filterTvShow = this.tvShow.filter((tvshow: TvShow) =>
      tvshow.genre_ids.includes(35)
    );
  }
  resetFilter() {
    this.filterTvShow = [];
  }
}
