import { Component, OnInit } from '@angular/core';
import { PalcesService } from './../palces.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];

  constructor(private placesService: PalcesService) { }

  ngOnInit() {
    this.offers = this.placesService.Places;
  }

}
