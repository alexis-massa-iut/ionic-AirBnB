import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Booking } from 'src/app/model/booking.model';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  
  private _bookings: Booking[];

  constructor(private toastController: ToastController, private authService: AuthService) { }

  get otherBookings() {
    return this._bookings ? [...this._bookings.filter(b => b.userId !== this.authService.userAuthenticated)] : [];
  }


  /**
   * Get bookings of place
   * @param id Id of booking to get
   * @returns Booking with place id
   */
  getPlace(id: string) {
    return { ...this._bookings.find(b => b.placeId === id) };
  }

  /**
   * Get bookings of current user
   * @returns Booking[] of current user
   */
  get myBookings() {
    return this._bookings ? [...this._bookings.filter(b => b.userId === this.authService.userAuthenticated)] : [];
  }

  /**
   * Add booking
   * @param booking Booking to add
   */
  addBooking(booking: Booking) {
    let id = (1).toString();

    do {
      id = (Math.floor(Math.random() * 1000)).toString()
      booking.id = id;
    } while (this._bookings && this._bookings.find(b => b.id === id));

    if (this._bookings)
      this._bookings.push(booking);
    else
      this._bookings = [booking];

    this.toastController.create({
      message: 'Booking created',
      duration: 2000
    }).then(toast => toast.present());
  }

  /**
   * Delete booking
   * @param booking Booking to delete 
   */
  deleteBooking(booking: Booking) {
    this._bookings = this._bookings ? this._bookings.filter(b => b.id !== booking.id) : [];
  }

}
