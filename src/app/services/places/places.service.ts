import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Place } from '../../model/place.model';
import { AuthService } from '../auth/auth.service';
import { PhotoService } from '../photo/photo.service';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    constructor(private photoService: PhotoService,
        private authService: AuthService,
        private toastController: ToastController
    ) { }

    /**
     * Get all places
     * @returns Place[]
     */
    getAllPlaces(): Place[] {
        return JSON.parse(localStorage.getItem('places'));
    }

    /**
     * Get place by id
     * @param id Id of place to get
     * @returns Place
     */
    getPlaceById(id: string): Place {
        return localStorage.getItem('places') ? this.getAllPlaces().find(p => p.id === id) : null;
    }

    /**
     * Get place by title
     * @param title title of place to get
     */
    getPlaceByTitle(title: string): Place {
        return localStorage.getItem('places') ? this.getAllPlaces().find(p => p.title === title) : null;
    }

    /**
     * Get my places
     * @returns Place[] of current user
     */
    getMyPlaces(): Place[] {
        const allPlaces = this.getAllPlaces();
        return allPlaces ? allPlaces.filter(b => b.userId === this.authService.userAuthenticated) : [];
    }

    /**
     * Add place
     * @param place Place to add
     */
    addPlace(place: Place) {

        if (this.getPlaceByTitle(place.title)) {
            this.toastController.create({
                message: 'Place with the same title already exists',
                duration: 3000
            }).then(toast => toast.present());
            return;
        }

        do {
            place.id = (Math.floor(Math.random() * 1000)).toString()
        } while (this.getPlaceById(place.id));

        // If place doesn't exist already
        let allPlaces = this.getAllPlaces();
        if (allPlaces) allPlaces.push(place);
        else allPlaces = [place];

        localStorage.setItem('places', JSON.stringify(allPlaces));
        this.toastController.create({
            message: 'Place created',
            duration: 2000
        }).then(toast => toast.present());

    }

    /**
     * Update place
     * @param place Place to update
     * @returns Place
     */
    updatePlace(place: Place) {
        const allPlaces = this.getAllPlaces();
        const index = allPlaces.findIndex(p => p.id === place.id);
        if (index !== -1) {
            allPlaces[index] = place;
            localStorage.setItem('places', JSON.stringify(allPlaces));
            this.toastController.create({
                message: 'Place updated',
                duration: 2000
            }).then(toast => toast.present());
        } else {
            this.toastController.create({
                message: 'Place not found',
                duration: 2000
            }).then(toast => toast.present());
        }
    }

    /**
     * Delete place
     * @param place Place to delete
     */
    deletePlace(place: Place) {
        let places = this.getAllPlaces();
        if (places) {
            places = places.filter(p => p.id !== place.id);
            localStorage.setItem('places', JSON.stringify(places));
            this.toastController.create({
                message: 'Place deleted',
                duration: 2000
            }).then(toast => toast.present());
        }
    }
}
