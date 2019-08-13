import { Place } from '../place.model';
import { PalcesService } from './../palces.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesService: PalcesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.Places;
  }

}
