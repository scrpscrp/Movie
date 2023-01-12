import { MoviesService } from './../services/movies.service';
import { DataInterface } from '../Interface/data.Interface';
import { TvShowService } from '../services/tv-show.service';
import { Movie } from './../Interface/movie.interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { formsInterface } from '../Interface/form.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filterMovies: Movie[] = [];
  params: string = '';
  title: string = '';
  pageCount: number = 1;
  form: FormGroup;

  constructor(
    private cdr: ChangeDetectorRef,
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.movieService.getGenre().subscribe((genres) => console.log(genres));
    this.filterMovies = this.movies;
  }

  checkCurrentRoute() {
    this.route.queryParams.subscribe((params) => {
      if (params['order']) {
        this.params = params['order'];

        switch (this.params) {
          case 'popular':
            this.title = 'Popular Movies';
            this.movieService
              .getMovies(this.params)
              .subscribe((data: DataInterface) => {
                this.movies = data.results;
                console.log(this.movies);
              });
            this.resetFilter();
            break;
          case 'now_playing':
            this.title = 'Now Playing';
            this.movieService
              .getMovies(this.params)
              .subscribe((data: DataInterface) => {
                this.movies = data.results;
              });
            this.resetFilter();
            break;
          case 'upcoming':
            this.title = 'Upcoming';
            this.movieService
              .getMovies(this.params)
              .subscribe((data: DataInterface) => {
                this.movies = data.results;
              });
            this.resetFilter();
            break;
          case 'top_rated':
            this.title = 'Top Rated';
            this.movieService
              .getMovies(this.params)
              .subscribe((data: DataInterface) => {
                this.movies = data.results;
              });
            this.resetFilter();
            break;
        }
      }
    });
  }
  loadMore() {
    this.pageCount++;
    this.movieService
      .getMovies(this.params, this.pageCount)
      .subscribe((data: DataInterface) => {
        this.movies.push(...data.results);
      });
    console.log(this.movies);

    if (this.filterMovies.length) {
      this.filter();
    }
  }

  filter() {
    let genresToFilter = this.form.value;
    console.log(genresToFilter);
    this.filterMovies = this.movies.filter(
      (movie: Movie) => movie.genre_ids == genresToFilter
    );
    this.cdr.detectChanges();
    console.log(this.filterMovies);
  }
  resetFilter() {
    this.filterMovies = [];
  }

  Data: formsInterface[] = [
    // { name:''}

    { id: 28, name: 'Action' },

    { id: 12, name: 'Adventure' },

    { id: 16, name: 'Animation' },

    { id: 35, name: 'Comedy' },

    { id: 80, name: 'Crime' },

    { id: 99, name: 'Documentary' },

    { id: 18, name: 'Drama' },

    { id: 10751, name: 'Family' },

    { id: 14, name: 'Fantasy' },

    { id: 36, name: 'History' },

    { id: 27, name: 'Horror' },

    { id: 10402, name: 'Music' },

    { id: 9648, name: 'Mystery' },

    { id: 10749, name: 'Romance' },

    { id: 878, name: 'Science Fiction' },

    { id: 10770, name: 'TV Movie' },

    { id: 53, name: 'Thriller' },

    { id: 10752, name: 'War' },

    { id: 37, name: 'Western' },
  ];

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    this.filter();
  }
}
