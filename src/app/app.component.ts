import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public tabActive;
    constructor(private tab: Router ){
        this.tabActive = true;
    }
  title = 'MUSIC';
  nav(tab){
      if(tab == 'track'){
          this.tabActive = true;
          this.tab.navigate(['tracklist']);
          return;
      }
      this.tabActive = false;
      this.tab.navigate(['genreslist']);
  }
}
