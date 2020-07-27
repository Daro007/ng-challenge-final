import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Observable } from 'rxjs';

import { CountersService } from '../../Services/counters.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css'],
})
export class OwnersComponent implements OnInit {
  public owners: Observable<any>;
  public ownersArray = [];
  public rowSelected: any;

  page = '1';

  count: string;

  constructor(
    private _apiService: ApiService,
    private counter: CountersService
  ) {}

  showOwnerDetails(param) {
    // console.log(param);
    this.rowSelected = param;
  }

  showMore() {
    const currentPage = parseInt(this.page) + 1;
    this.page = currentPage.toString();
    console.log(`${this.page}`);
    this._apiService
      .getOwners(this.page)
      .subscribe((data) => this.ownersArray.push(...data.result));
    console.log(this.ownersArray.length);
    return this.page;
  }

  addToFav(owner) {
    if (owner) {
      const currentFavs = JSON.parse(sessionStorage.getItem('favs'));
      if (currentFavs) {
        currentFavs.push(owner);
        sessionStorage.setItem('favs', JSON.stringify(currentFavs));
        this.favCurrentCount();
        // console.log(JSON.stringify(currentFavs));
      }
      console.log(currentFavs);
    } else {
      console.log('no recibi nada aun');
    }
  }

  favCurrentCount() {
    this.counter.theFavCounter(
      JSON.parse(sessionStorage.getItem('favs')).length
    );
    // console.log(JSON.parse(sessionStorage.getItem('favs')).length);
  }

  ngOnInit(): void {
    this._apiService
      .getOwners(this.page)
      .subscribe((data) => (this.ownersArray = data.result));
    console.log(this.owners);

    this.counter.currentFavs.subscribe((count) => (this.count = count));
  }
}
