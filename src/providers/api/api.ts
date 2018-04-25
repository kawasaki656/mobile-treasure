import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DataProvider} from "../data/data";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  news: any;
  constructor(public http: HttpClient, public dataProvider: DataProvider) {
    console.log("API Provider");
    this.getNews();
    this.getGames();
  }

  getNews() {
    this.dataProvider.news = [
      {
        header: "Открытие",
        created: "Май 5, 2018",
        information: "Мы запустили приложение и рады будем запускать и проводить для вас новые игры. Уже сейчас доступна первая игра."
      }, {
        header: "Первая игра",
        created: "Май 6 2018",
        information: "Открыли первую игру, начало назначено на ..."
      }];
  }

  getGames() {
    this.dataProvider.games = [
      {
        name: "Первые кладоискатели",
        created: "5 Мая 2018",
        photo: "Event1",
        place: "г. Орша",
        members: 34,
        max: 100,
        likes: 31,
        codesCount: 3,
        started: "Ориентировочно 12 Мая 2018",
        cost: "5 BYN",
        prize: "1) 150 BYN 2) 50 BYN"
      }, {
        name: "Не отходи от центра",
        created: "6 Мая 2018",
        photo: "Event2",
        place: "г. Орша",
        members: 12,
        max: 100,
        likes: 19,
        codesCount: 4,
        started: "Ориентировочно 19 Мая 2018",
        cost: "5 BYN",
        prize: "1) 150 BYN 2) 50 BYN"
      }
    ];
  }

}
