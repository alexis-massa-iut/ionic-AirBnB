import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../../services/places/places.service';
import { Place } from 'src/app/model/place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getAllPlaces();
  }

  /**
   * Update offer list
   * @description This comes as a last resort to fix the issue of the list not updating
   * when coming back to the /discover tab after a new offer is added.
   * I think we can update the list by using the ViewChild directive in the places.page.ts
   * to trigger an updateData() method in the discover.page.ts when tabs are switched.
   * But I can't seem to use ViewChild on a Page element, but only on a Component/Template/Directive.
   */
  onUpdateList() {
    this.loadedPlaces = this.placesService.getAllPlaces();
  }

  // Pour ouvrir/fermer un menu programmatiquement
  // onOpenMenu() {
  //   this.menuCtrl.toggle();
  // }
}
