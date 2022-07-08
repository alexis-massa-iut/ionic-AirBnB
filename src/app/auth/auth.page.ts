import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../model/user.model';
import { UsersService } from '../services/users/users.service';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  isLoading = false;
  showPassword = false;

  users: User[];

  formAuth: FormGroup;
  formUser: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertController: AlertController,
    private userService: UsersService,
    private toastController: ToastController) { }

  ngOnInit() { this.generateFormValidation(); this.users = this.userService.getAllUsers(); }

  /**
   * Generate form validation
   */
  generateFormValidation() {
    this.formAuth = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      })
    });

    this.formUser = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }


  /**
   * Display loading spinner
   */
  onLogin() {
    this.isLoading = true;
    this.loadingCtrl.create({ keyboardClose: true, message: 'Authentification en cours...' })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
        }, 1000);
      });
  }

  /**
   * Handle submitted auth form
   * @param form FormGroup to handle
   * If auth is correct, reset form and redirect to home page
   * If auth is incorrect, display error message
   */
  onSubmit(form: FormGroup) {
    if (!form.valid) { return; }
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password);
    if (this.authService.userIsAuthenticated) {
      form.reset(); // Vider le formulaire (sinon, à la deconnexion, les infos sont toujours remplies)
      this.router.navigateByUrl('/places/tabs/discover');
      this.toastController.create({
        message: 'Authentification réussie',
        duration: 2000
      }).then(toast => toast.present());
    } else {
      this.toastController.create({
        message: 'Identifiants incorrects',
        duration: 2000
      }).then(toast => toast.present());
    }

  }

  /**
   * Toggle show password
   */
  toggleShow() {
    this.showPassword = !this.showPassword;
    let pwdInput = document.getElementById('password') as HTMLInputElement | null;
    if (pwdInput) pwdInput.type = this.showPassword ? 'text' : 'password';
  }

  /**
   * Create user
   */
  onCreateUser() {
    if (!this.formUser.valid) { return; }
    const username = this.formUser.value.username;
    const password = this.formUser.value.password;
    this.userService.createUser(username, password);
    this.users = this.userService.getAllUsers();
  }

  /**
   * Delete user
   * @param user User to delete
   */
  onDeleteUser(user: User) {
    this.alertController.create({
      header: 'Confirmation',
      message: `Voulez-vous vraiment supprimer ${user.username} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        { text: 'Supprimer', handler: () => { this.userService.deleteUser(user); this.users = this.userService.getAllUsers(); } }
      ]
    }).then(alert => alert.present());
  }
}