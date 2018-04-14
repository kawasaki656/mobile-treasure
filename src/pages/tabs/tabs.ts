import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { NewsPage } from '../news/news';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountPage;
  tab2Root = GamesPage;
  tab3Root = NewsPage;

  constructor() {

  }
}
