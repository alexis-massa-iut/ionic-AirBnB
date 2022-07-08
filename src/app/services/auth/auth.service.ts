import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UsersService } from '../users/users.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userAuthenticated: string; // Id of connected user (used for bookings)

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  constructor(private usersService: UsersService) { }

  login(username: string, password: string) {
    if (this.usersService.getUserByUsername(username) && this.usersService.getUserByUsername(username).password === password) {
      this._userIsAuthenticated = true;
      this._userAuthenticated = this.usersService.getUserByUsername(username).id;
    }
  }

  logout() {
    this._userIsAuthenticated = false;
    this._userAuthenticated = null;
  }
}
