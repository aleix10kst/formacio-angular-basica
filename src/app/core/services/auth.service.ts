import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Usuari identificat
   */
  private user: User;

  /**
   * Observable per escoltar els canvis en l'estat de l'usauri
   */
  readonly user$: Observable<User>;

  /**
   * Subject per emeter events quan hi hagi un canvi a l'esta de l'usuari
   */
  private readonly _user$: Subject<User>;

  constructor() {
    this._user$ = new Subject<User>();
    this.user$ = this._user$.asObservable();
  }

  getUsuari(): Observable<User> {
    if (this.user) {
      return of(this.user);
    }
  }
}
