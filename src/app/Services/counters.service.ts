import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
// import { count } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CountersService {
  private favCounter = new BehaviorSubject<string>('0');
  currentFavs = this.favCounter.asObservable();

  private deadCats = new BehaviorSubject<string>('0');
  currentDeadCats = this.deadCats.asObservable();

  constructor() {}

  theFavCounter(count: string) {
    this.favCounter.next(count);
  }

  theDeadCatsCounter(countDeadCats: string) {
    this.deadCats.next(countDeadCats);
  }
}
