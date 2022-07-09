import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userAuthenticated = ""; // Id of connected user (used for bookings)

  constructor(private usersService: UsersService) { }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userAuthenticated() {
    return this._userAuthenticated;
  }

  login(username: string, password: string) {
    if (this.usersService.getUserByUsername(username) && this.usersService.getUserByUsername(username).password === password) {
      this._userIsAuthenticated = true;
      this._userAuthenticated = this.usersService.getUserByUsername(username).id;
    }
  }

  logout() {
    this._userIsAuthenticated = false;
    this._userAuthenticated = "";
  }
}
