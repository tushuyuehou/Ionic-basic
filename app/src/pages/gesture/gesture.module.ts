import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GesturePage } from './gesture';

@NgModule({
  declarations: [
    GesturePage,
  ],
  imports: [
    IonicPageModule.forChild(GesturePage),
  ],
})
export class GesturePageModule {}
