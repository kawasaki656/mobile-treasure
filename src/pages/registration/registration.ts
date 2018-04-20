import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  valid: boolean;
  phone: string;
  phoneMask: Object;
  step: string;
  validationErrors:Array;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.phone = "+375";
    this.phoneMask = {mask:'+000(00) 000-00-00', len:18, type:'num'};
    this.step = 'start';
    this.validationErrors = [];
  }

  spliceString(str, index, count, add) {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
  }

  ionViewDidLoad() {
    this.valid = false;
  }

  registration() {
    this.validationErrors = [];

    //check validation
    if(!this.pass1 || !this.pass2 || !this.phone) {
      this.validationErrors.push('Есть пустые поля, пожалуйста заполните все поля')
    }
    if(this.pass1 !== this.pass2) {
      this.validationErrors.push('Пароли не совпадают, пожалуйста проверьте их')
    }
    if(this.phone) {
      if (this.phone.length < 18) {
        this.validationErrors.push('Телефон введен некорректно, введите пожалуйста это поле верно')
      }
    }
    if(this.pass1) {
      if (this.pass1.length < 6) {
        this.validationErrors.push('Пароль должен содержать минимум 6 символов')
      }
    }

    if(this.validationErrors.length > 0) {
      let toast = this.toastCtrl.create({
        message: this.validationErrors[0],
        duration: 2000
      });
      toast.present();
    }
  }

  login() {
    console.log("done")
  }

  goToRegistration() {
    this.step = 'registration';
  }

  goToLogin() {
    this.step = 'login';
  }

  goToStart() {
    this.step = 'start';
  }

}
