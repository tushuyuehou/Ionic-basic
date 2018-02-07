import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {CardPage} from '../card/card'
import {FabPage} from '../fab/fab'
import {GesturePage} from '../gesture/gesture'
import {GridPage} from '../grid/grid'
import {FormPage} from '../form/form'
import {ToastPage} from '../toast/toast'
import {AlertPage} from '../alert/alert'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonPage;
  listPage;
  cardPage;
  fabPage;
  gesturePage;
  gridPage;
  formPage;
  toastPage;
  alertPage;

  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.cardPage = CardPage;
    this.fabPage = FabPage;
    this.gesturePage = GesturePage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
    this.alertPage = AlertPage;
  }

}
