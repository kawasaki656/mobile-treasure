import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from "../event/event";
import {PlayPage} from "../play/play";
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games: any[];

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.games = this.dataService.games;
  }

  //show event or play game
  show(item: Object) {
    this.showEvent(item);
  }

  //show event
  showEvent(item: Object) {
    this.navCtrl.push(EventPage, {event: item});
  }

  //for users which join to event
  playGame() {

  }

}
