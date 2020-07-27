import { Component, OnInit } from '@angular/core';
import { CountersService } from '../../Services/counters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public favs = [];
  getFavs() {
    const currentFavs = JSON.parse(sessionStorage.getItem('favs'));
    console.log(currentFavs);
    this.favs = currentFavs;
  }

  count: string;

  constructor(private counter: CountersService) {}

  // numFav: number;
  ngOnInit(): void {
    this.counter.currentFavs.subscribe((count) => (this.count = count));
    sessionStorage.setItem('favs', '[]');
  }
}
