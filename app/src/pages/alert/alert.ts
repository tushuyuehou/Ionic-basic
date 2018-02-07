import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Invalid Email or password',
      buttons: ['OK']
    });
    alert.present();
  }

  confirmAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'confirm alert',
      subTitle: 'confirm alert subtitle...',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
              console.error('cancelled...');
          }
        },
        {
          text: 'Ok',
          handler: () => {
              console.error('ok...');
          }
        }
      ]
    });
    alert.present();
  }

}
