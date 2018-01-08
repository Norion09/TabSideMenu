import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenPhotoPage } from './open-photo';

@NgModule({
  declarations: [
    OpenPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenPhotoPage),
  ],
})
export class OpenPhotoPageModule {}
