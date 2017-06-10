import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {appRoute} from './app.route';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { TrackEditComponent } from './track-edit/track-edit.component';
import { TrackAddComponent } from './track-add/track-add.component';
import {OnCreateDirective} from './directive/on-create.directive';
import { GenreslistComponent } from './genreslist/genreslist.component';
import { GenresEditComponent } from './genres-edit/genres-edit.component';
import { GenresAddComponent } from './genres-add/genres-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TracklistComponent,
    TrackEditComponent,
    TrackAddComponent,
    OnCreateDirective,
    GenreslistComponent,
    GenresEditComponent,
    GenresAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
