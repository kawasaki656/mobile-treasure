import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {

  secondsLeft: number;
  dateLeft: Array<String>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.secondsLeft = 100000;
    this.dateLeft = this.formatTime(this.secondsLeft);
  }

  formatTime(seconds) {
    var minutes = seconds / 60 | 0,
        hours = minutes / 60 | 0,
        days = hours / 24 | 0,
        hours = hours % 24;
    seconds %= 60;
    minutes %= 60;

    return [days, hours, minutes, seconds]
  };


  ionViewDidLoad() {
    setInterval(()=>{
      this.secondsLeft--;
      this.dateLeft = this.formatTime(this.secondsLeft);
    }, 1000)
  }

}
