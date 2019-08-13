import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PalcesService } from './../../palces.service';
import { Place } from '../../place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private placesService: PalcesService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = this.placesService.getPlace(paraMap.get('placeId'));
    });
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
