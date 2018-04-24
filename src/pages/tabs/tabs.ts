import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { AccountPage } from '../account/account';
import { ApiProvider } from "../../providers/api/api";
import {DataProvider} from "../../providers/data/data";

@Component({
  templateUrl: 'tabs.html',
  providers: [ ApiProvider ]
})
export class TabsPage {

  tab1Root = AccountPage;
  tab2Root = GamesPage;
  tab3Root = NewsPage;

  constructor(public apiService: ApiProvider, public dataService: DataProvider) {
  }
}
