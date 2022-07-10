import { Component, OnInit, ViewChild } from '@angular/core';

import { PlacesService } from '../../services/places/places.service';
import { Place } from 'src/app/model/place.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(private placesService: PlacesService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.getMyPlaces();
  }

  ionViewWillEnter() {
    this.offers = this.placesService.getMyPlaces();
  }

  /**
   * Navigate to detail page of clicked offer
   * @param place Place to display
   */
  onNavigate(place: Place){
    this.router.navigate(['/places/tabs/offers/', place.id]);
  }

  /**
   * Delete place
   * @param place Place to delete 
   */
  onDeleteOffer(place: Place) {
    this.alertController.create({
      header: 'Confirmation',
      message: `Voulez-vous vraiment supprimer l'offre ${place.title} ?`,
      buttons: [
        { text: 'Annuler', role: 'cancel' },
        {
          text: 'Supprimer', handler: () => {
            this.placesService.deletePlace(place);
            this.offers = this.placesService.getAllPlaces();
          }
        }
      ]
    }).then(alert => alert.present());
  }

}
