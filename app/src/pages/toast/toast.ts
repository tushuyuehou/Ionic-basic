import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  // DI = Dependency Injection 依赖注入
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(): void {
    let toast = this.toastCtrl.create({
      message: 'a basic toast...',
      duration: 1000
    });
    toast.present();
  }

  showToastPosition(position: string): void {
    let toast = this.toastCtrl.create({
      message: 'position toast...',
      duration: 2000,
      position: position
    });
    toast.present(); // Android: toast.show();
  }

  showToastClose():void {
    let toast = this.toastCtrl.create({
      message: 'toast with close...',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

}
