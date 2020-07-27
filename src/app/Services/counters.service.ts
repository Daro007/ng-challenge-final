import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CountersService {
  // favs = sessionStorage.getItem('favs').length.toString();

  private favCounter = new BehaviorSubject<string>('0');
  currentFavs = this.favCounter.asObservable();

  constructor() {}

  theFavCounter(count: string) {
    this.favCounter.next(count);
  }
}
