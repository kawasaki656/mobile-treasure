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

}
