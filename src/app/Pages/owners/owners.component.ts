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

  countFav: string;
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

  addToFav(owner: any) {
    if (owner) {
      const currentFavs = JSON.parse(sessionStorage.getItem('favs'));
      let checkingDuplicates = currentFavs.some((elem) => elem.id === owner.id);

      if (currentFavs && !checkingDuplicates) {
        currentFavs.push(owner);
        sessionStorage.setItem('favs', JSON.stringify(currentFavs));
        this.favCurrentCount();
      }
    } else {
      return;
    }
  }

  favCurrentCount() {
    this.counter.theFavCounter(
      JSON.parse(sessionStorage.getItem('favs')).length
    );
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
    this._apiService
      .getOwners(this.page)
      .subscribe((data) => (this.ownersArray = data.result));
    console.log(this.owners);

    // Primer llamado a la API

    this.counter.currentFavs.subscribe((count) => (this.countFav = count));
    this.deadCatsCounter.currentDeadCats.subscribe((count) => {
      this.deadCats = count;
    });
    this.catKiller();
  }
}
