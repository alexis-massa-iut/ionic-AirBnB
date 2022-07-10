import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/model/place.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  formOffer: FormGroup;
  image = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'; // Default image

  constructor(
    private photoService: PhotoService,
    private placesService: PlacesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { this.generateValidators(); }

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
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.formOffer.patchValue({ image: this.image }); // Image in form input
      });
    } else {
      this.photoService.uploadPicture().then(imageData => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.formOffer.patchValue({ image: this.image }); // Image in form input
      });
    }
  }

  /**
   * Méthode pour ajouter une nouvelle offre
   */
  onCreateOffer() {
    if (!this.formOffer.valid) { return; }

    const newPlace = new Place(
      '0',
      this.authService.userAuthenticated,
      this.formOffer.value.title,
      this.formOffer.value.description,
      this.image,
      this.formOffer.value.price);

    this.placesService.addPlace(newPlace);

    this.router.navigate(['/places/tabs/offers']);
  }


}
