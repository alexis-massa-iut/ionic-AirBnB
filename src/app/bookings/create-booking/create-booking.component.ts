import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Booking } from 'src/app/model/booking.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BookingsService } from 'src/app/services/bookings/bookings.service';

import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  formBooking: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService,
    private bookingService: BookingsService
  ) { }

  ngOnInit() { this.generateFormValidation(); }

  generateFormValidation() {
    this.formBooking = new FormGroup({
      guestNumber: new FormControl(null, { updateOn: 'change', validators: [Validators.required, Validators.min(1)] }),
      startDate: new FormControl(null, { updateOn: 'change', validators: [Validators.required] }),
      endDate: new FormControl(null, { updateOn: 'change', validators: [Validators.required] })
    });
  }

  onCreateBooking() {
    if (!this.formBooking.valid) { return; }

    const newBooking = new Booking(
      '0',
      this.selectedPlace.id,
      this.authService.userAuthenticated,
      this.formBooking.value.guestNumber,
      this.formatDate(this.formBooking.value.startDate),
      this.formatDate(this.formBooking.value.endDate)
    );

    this.bookingService.addBooking(newBooking);

    this.modalCtrl.dismiss(newBooking, 'confirm');

  }

  /**
   * Minimum start date to book
   * @returns 
   */
  minStartDate() {
    return this.formatDate(new Date(Date.now()));
  }

  /**
   * Minimum end date to book
   * @returns 
   */
  minEndDate() {
    let date = new Date(this.minStartDate());
    date.setDate(date.getDate() + 1);
    return this.formatDate(date);
  }

  /**
   * Format date
   * @param date Date to format
   * @returns Formatted date as string
   */
  formatDate(date: Date): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
