import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Observable } from 'rxjs';

import { CountersService } from '../../Services/counters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public owners: Observable<any>;
  public ownersArray = [];
  public rowSelected: any;
  public filterOwner: string;

  public smallFeedback: boolean;

  public btnHandler: boolean;

  page = '1';

  countFavs: string;
  deadCats: string;

  constructor(
    private _apiService: ApiService,
    private counter: CountersService,
    private deadCatsCounter: CountersService
  ) {}

  showOwnerDetails(param) {
    // console.log(param);
    this.rowSelected = param;
  }

  showMore() {
    this.catKiller();
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
      let checkingDuplicates = currentFavs.some((elem) => elem.id === owner.id);
      if (currentFavs && !checkingDuplicates) {
        currentFavs.push(owner);
        sessionStorage.setItem('favs', JSON.stringify(currentFavs));
        this.favCurrentCount();
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

  filterOwnerByName() {
    this.btnHandler = false;
    if (this.filterOwner && this.filterOwner.length >= 2) {
      this.catKiller();
      this._apiService
        .getOwnersByName(this.filterOwner)
        .subscribe((data) => (this.ownersArray = data.result));
      this.smallFeedback = false;
      console.log(this.owners);
    } else {
      this.smallFeedback = true;
    }
  }
  catKiller() {
    let cats = parseInt(this.deadCats);
    console.log(cats);
    cats += 1;
    this.deadCats = cats.toString();
    console.log(this.deadCats);
    this.deadCatsCounter.theDeadCatsCounter(this.deadCats);
  }

  ngOnInit(): void {
    this.btnHandler = true;
    this._apiService
      .getOwners(this.page)
      .subscribe((data) => (this.ownersArray = data.result));
    console.log(this.owners);

    this.deadCatsCounter.currentDeadCats.subscribe((count) => {
      this.deadCats = count;
    });

    this.smallFeedback = false;
    this.counter.currentFavs.subscribe((count) => (this.countFavs = count));
    this.catKiller();
  }
}

// Esto podria ir en el NG on init
//  this._apiService
//       .getOwnersByName(this.filterOwner)
//       .subscribe((data) => (this.owners = data.result));
//     console.log(this.owners);
