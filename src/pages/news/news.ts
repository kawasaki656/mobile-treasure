import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  news: any[];

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.news = this.dataService.news;
  }
}
