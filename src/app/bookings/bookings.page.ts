import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Booking } from '../model/booking.model';
import { BookingsService } from '../services/bookings/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  myBookings: Booking[];

  constructor(
    private bookingsService: BookingsService,
    private alertController: AlertController
  ) { }

  ngOnInit() { this.myBookings = this.bookingsService.myBookings; }

  /**
   * Delete booking
   * @param booking Booking to delete
   */
  onDeleteBooking(booking: Booking) {
    this.alertController.create({
      header: 'Confirmation',
      message: `Voulez-vous vraiment supprimer la réservation ${booking.id} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer', handler: () => {
            this.bookingsService.deleteBooking(booking);
            this.myBookings = this.bookingsService.myBookings;
          }
        }
      ]
    }).then(alert => alert.present());
  }


}
