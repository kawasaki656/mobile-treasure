import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  change(event: any) {
    var prepend = "+";
    if(this.telephone[0] !== '+')
    this.telephone = prepend + this.telephone;
    if(this.telephone.length > 5 && this.telephone[4] !== '(') {
      this.telephone = this.spliceString(this.telephone, 4, 0, '(');
      this.telephone = this.spliceString(this.telephone, 7, 0, ')');
    }
    if(this.telephone.length > 10 && this.telephone[11] !== '-') {
      this.telephone = this.spliceString(this.telephone, 11, 0, '-');
    }
    if(this.telephone.length > 13 && this.telephone[14] !== '-') {
      this.telephone = this.spliceString(this.telephone, 14, 0, '-');
    }
  }

}
