import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { PlacesService } from 'src/app/services/places/places.service';
import { Place } from 'src/app/model/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlaceById(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.modalCtrl
      .create({
        component: CreateBookingComponent, // modale à créer
        componentProps: { selectedPlace: this.place } // données transmises à la modale
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss(); // listener qui renvoie une promesse
      })
      .then(resultData => { // resultData : données transmises par la modale
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
  }
}
