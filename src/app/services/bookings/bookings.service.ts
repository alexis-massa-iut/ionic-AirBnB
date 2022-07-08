import { Injectable } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private _bookings: Booking[] = [
    new Booking('b1', 'p1', 'John', 'Doe', 5, new Date('2022-07-07'), new Date('2022-08-02'), false),
    new Booking('b2', 'p2', 'Harry', 'Potter', 3, new Date('2022-07-12'), new Date('2022-07-16'), false),
    new Booking('b3', 'p3', 'Philippe', 'Martin', 2, new Date('2022-07-17'), new Date('2022-07-18'), true),
    new Booking('b4', 'p4', 'Nathan', 'Maxwell', 1, new Date('2022-07-24'), new Date('2022-07-29'), false),
    new Booking('b5', 'p2', 'Hervé', 'Blanchon', 4, new Date('2022-08-29'), new Date('2022-08-31'), false),
    new Booking('b6', 'p5', 'Philippe', 'Martin', 2, new Date('2022-08-30'), new Date('2022-09-05'), true)
  ];

  get otherBookings() {
    return [...this._bookings.filter(b => !b.personal)];
  }

  constructor() { }

  getPlace(id: string) {
    return { ...this._bookings.find(b => b.id === id) };
  }

  get myBookings() {
    return [...this._bookings.filter(b => b.personal)];
  }


}
