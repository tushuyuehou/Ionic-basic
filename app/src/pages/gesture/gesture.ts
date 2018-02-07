import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the GesturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gesture',
  templateUrl: 'gesture.html',
})
export class GesturePage {

  tapNumber: number = 0;
  pressNumber: number = 0;
  panNumber: number = 0;
  swipeNumber: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturePage');
  }

  swipeEvent(): void {
    this.swipeNumber++;
  }

  panEvent(): void {
    this.panNumber++;
  }

  pressEvent(): void {
    this.pressNumber++;
  }

  tapEvent(): void {
    this.tapNumber++;
  }

}
