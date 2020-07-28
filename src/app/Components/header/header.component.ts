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

  countFavs: string;
  deadCats: string;

  constructor(
    private counter: CountersService,
    private deadCatsCounter: CountersService
  ) {}

  ngOnInit(): void {
    this.counter.currentFavs.subscribe((count) => (this.countFavs = count));

    this.deadCatsCounter.currentDeadCats.subscribe((count) => {
      this.deadCats = count;
    });

    sessionStorage.setItem('favs', '[]');
  }
}
