import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from "../event/event";

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {

  constructor(public navCtrl: NavController) {

  }

  showEvent(name:string) {
    this.navCtrl.push(EventPage, {name: name});
  }

  //for users which join to event
  showGame() {

  }

}
