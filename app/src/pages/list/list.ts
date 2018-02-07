import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  // todo 发起一次 HTTP 请求，获取服务器端数据
  items = [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'Node.js',
    'React',
    'Ionic'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  selectItem(item: string) {
    console.error(`selected: ${item}`);
  }

}
