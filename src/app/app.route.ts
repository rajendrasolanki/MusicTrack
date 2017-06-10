import {Routes} from '@angular/router';
import {TracklistComponent} from './tracklist/tracklist.component';
import {TrackEditComponent} from './track-edit/track-edit.component';
import {TrackAddComponent} from './track-add/track-add.component';
import {GenreslistComponent} from './genreslist/genreslist.component';
import {GenresEditComponent} from './genres-edit/genres-edit.component';
import {GenresAddComponent} from './genres-add/genres-add.component';

export const appRoute: Routes=[
    {
        path:'',
        redirectTo:'tracklist',
        pathMatch:'full'
    },
    {
        path:'tracklist',
        component: TracklistComponent
    },
    {
        path:'track-edit/:track',
        component: TrackEditComponent
    },
    {
        path:'track-add',
        component: TrackAddComponent
    },
    {
        path:'genreslist',
        component: GenreslistComponent
    },
    {
        path:'genres-edit/:genres',
        component: GenresEditComponent
    },
    {
        path:'genres-add',
        component: GenresAddComponent
    }
];