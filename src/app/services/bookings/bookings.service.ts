import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Booking } from 'src/app/model/booking.model';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private toastController: ToastController, private authService: AuthService) { }

  /**
   * Get all bookings
   * @returns All bookings
   */
  getAllBookings(): Booking[] {
    return JSON.parse(localStorage.getItem('bookings'));
  }

  /**
   * Get booking by id
   * @param id Id of booking to get
   */
  getBookingById(id: string): Booking {
    const allBookings = this.getAllBookings();
    return allBookings ? allBookings.find(b => b.id === id) : null;
  }


  /**
   * Get bookings of place
   * @param id Id of booking to get
   * @returns Booking with place id
   */
  getBookingsOfPlace(id: string): Booking[] {
    return JSON.parse(localStorage.getItem('bookings')).filter(b => b.placeId === id);
  }

  /**
   * Get bookings of current user
   * @returns Booking[] of current user
   */
  getMyBookings(): Booking[] {
    const allBookings = this.getAllBookings();
    return allBookings ? allBookings.filter(b => b.userId === this.authService.userAuthenticated) : [];
  }

  /**
   * Add booking
   * @param booking Booking to add
   */
  addBooking(booking: Booking) {
    do {
      booking.id = (Math.floor(Math.random() * 1000)).toString()
    } while (this.getBookingById(booking.id));

    let bookings = this.getAllBookings();
    if (bookings) bookings.push(booking);
    else bookings = [booking];

    localStorage.setItem('bookings', JSON.stringify(bookings));
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
    let bookings = this.getAllBookings();
    if (bookings) {
      bookings = bookings.filter(b => b.id !== booking.id);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      this.toastController.create({
        message: 'Booking deleted',
        duration: 2000
      }).then(toast => toast.present());
    }
  }

}
