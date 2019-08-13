import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PalcesService } from '../../palces.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private placesService: PalcesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = this.placesService.getPlace(paraMap.get('placeId'));
    });
  }

}
