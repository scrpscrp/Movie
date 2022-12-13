import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      
        label: 'Movies',
        items: [
          { label: 'Popular', url: 'https://www.google.com/' },
          { label: 'Now Playing', url: 'https://www.google.com/' },
          { label: 'Upcoming', url: 'https://www.google.com/' },
          { label: 'Top Rated', url: 'https://www.google.com/' },
        ]
      },
  
      {
        label: 'Tv shows',
        items: [
          { label: 'Popular', url: 'https://www.google.com/' },
          { label: 'Airing Today', url: 'https://www.google.com/' },
          { label: 'On TV', url: 'https://www.google.com/' },
          { label: 'Top Rated', url: 'https://www.google.com/' },
        ]
      },
      {
        label: 'Actors', url: 'https://www.google.com/',
        
      }
     
    ]
    
  }

}
