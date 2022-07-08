import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private toastController: ToastController) { }

  /**
   * Get all users from localStorage
   */
  getAllUsers(): Array<User> {
    return JSON.parse(localStorage.getItem('users'));
  }

  /**
   * Get user from localStorage 
   */
  getUserById(id: string): User {
    const allUsers = this.getAllUsers()
    return allUsers ? allUsers.find(user => user.id === id) : null;
  }


  /**
   * Get user from localStorage 
   */
  getUserByUsername(username: string): User | null {
    const allUsers = this.getAllUsers()
    if (allUsers)
      return allUsers.find(user => user.username === username);
    else
      return null;
  }



  /**
   * Create User and add to localStorage
   * @param username: username
   * @param password: password
   */
  createUser(username: string, password: string) {
    //Create id
    let id = (1).toString();
    do {
      id = (Math.floor(Math.random() * 1000)).toString()
    } while (this.getUserById(id));

    if (!this.getUserById(id) && !this.getUserByUsername(username)) { // If user doesn't exist already
      let user = new User(id, username, password);
      let users = this.getAllUsers();
      if (users) users.push(user);
      else users = [user];
      localStorage.setItem('users', JSON.stringify(users));

      this.toastController.create({
        message: 'Utilisateur créé',
        duration: 2000
      }).then(toast => toast.present());
    } else {
      this.toastController.create({
        message: 'Cet utilisateur existe déjà',
        duration: 2000
      }).then(toast => toast.present());
    }
  }

  /**
   * Delete User from localStorage
   * @param user: User
   */
  deleteUser(user: User) {
    let users = this.getAllUsers();
    if (users) {
      users = users.filter(u => u.id !== user.id);
      localStorage.setItem('users', JSON.stringify(users));
    }
    this.toastController.create({
      message: 'Utilisateur supprimé',
      duration: 2000
    }).then(toast => toast.present());
  }

}
