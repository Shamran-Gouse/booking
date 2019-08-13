import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PalcesService } from './../../palces.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private placesService: PalcesService,
              public modalCtrl: ModalController) { }


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
    const modal = this.modalCtrl.create({
      component: CreateBookingComponent
    }).then(modalEl => {
      modalEl.present();
    });
  }
}
