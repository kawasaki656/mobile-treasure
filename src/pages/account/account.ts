import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  userName: string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.userName = 'Alexander Alexandrovich';
  }
  goToEvents() {
    let toast = this.toastCtrl.create({
      message: 'Данные сохранены',
      duration: 1000
    });
    toast.present();
  }
}
