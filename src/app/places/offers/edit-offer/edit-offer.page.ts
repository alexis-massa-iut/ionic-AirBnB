import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places/places.service';

import { Place } from 'src/app/model/place.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss']
})
export class EditOfferPage implements OnInit {
  place: Place;
  image = '';
  formOffer: FormGroup;

  constructor(
    private photoService: PhotoService,
    private placesService: PlacesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesService.getPlaceById(paramMap.get('placeId'));
    });
    this.generateValidators();
    this.image = this.place.image;
  }

  generateValidators() {
    this.formOffer = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      }),
      description: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(255)]
      }),
      price: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      })
    });
  }

  /**
  * Méthode pour upload une photo
  * @param source (string) : source de la photo
  */
  onAddPicture(source: String) {
    if (source === 'camera') {
      this.photoService.takePicture().then(imageData => {
        this.place.image = 'data:image/jpeg;base64,' + imageData;
        this.formOffer.patchValue({ image: this.place.image }); // Image in form input
      });
    } else {
      this.photoService.uploadPicture().then(imageData => {
        this.place.image = 'data:image/jpeg;base64,' + imageData;
        this.formOffer.patchValue({ image: this.place.image }); // Image in form input
      });
    }
  }

  /**
   * Méthode pour update offre
   */
  onUpdateOffer() {
    if (!this.formOffer.valid) { return; }

    const newPlace = new Place(
      this.place.id,
      this.authService.userAuthenticated,
      this.formOffer.value.title,
      this.formOffer.value.description,
      this.image,
      this.formOffer.value.price);

    this.placesService.updatePlace(newPlace);

    this.router.navigate(['/places/tabs/offers']);
  }


}
