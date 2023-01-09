import { MvoviesService } from './movies.service';
import { TestBed } from '@angular/core/testing';


describe('ServicesService', () => {
  let service: MvoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
