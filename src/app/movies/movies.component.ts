import { map, Observable, tap } from 'rxjs';
import { MoviesService } from './../services/movies.service';
import { DataInterface } from '../Interface/data.Interface';
import { TvShowService } from '../services/tv-show.service';
import { Movie } from './../Interface/movie.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]> | undefined;
  filterMovies$: Observable<Movie[]> | undefined;
  params: string = '';
  title: string = '';
  pageCount: number = 1;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filterMovies$ = this.movies;
    this.checkCurrentRoute();
    this.movieService.getGenre().subscribe((genres) => console.log(genres));
  }

  checkCurrentRoute() {
    this.route.queryParams.subscribe((params) => {
      if (params['order']) {
        this.params = params['order'];
        let movies: Movie[] = [];
        switch (this.params) {
          case 'popular':
            this.title = 'Popular Movies';
            this.movies = this.movieService.getMovies(this.params).pipe(
              map((movieData: DataInterface) => (movies = movieData.results)),
              
            );
            break;
          case 'now_playing':
            this.title = 'Now Playing';
            this.movies = this.movieService
              .getMovies(this.params)
              .pipe(map((movieData: DataInterface) => movieData.results));
            break;
          case 'upcoming':
            this.title = 'Upcoming';
            this.movies = this.movieService
              .getMovies(this.params)
              .pipe(map((movieData: DataInterface) => movieData.results));
            break;
          case 'top_rated':
            this.title = 'Top Rated';
            this.movies = this.movieService
              .getMovies(this.params)
              .pipe(map((movieData: DataInterface) => movieData.results));
            break;
        }
      }
    });
  }
  // loadMore() {
  //   this.pageCount++;
  //   this.movieService
  //   .getMovies(this.params, this.pageCount)
  //   .subscribe((data: DataInterface) => {
  //     this.movies.push(...data.results);
  //   });
  // }

  // filter() {
  //   this.filterMovies=this.movies.filter((movie:Movie)=>movie.genre_ids.includes(16));
  // }

  resetFilter() {
    this.filterMovies$ = this.movies;
  }
}
