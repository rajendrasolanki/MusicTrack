import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditTrackService} from '../service/edit-track/edit-track.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-track-edit',
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.css'],
  providers: [EditTrackService]
})
export class TrackEditComponent implements OnInit {
    public track;
    public genres;
    public editForm: FormGroup;
    constructor(private activeRoute: ActivatedRoute, private edit: EditTrackService, private fb: FormBuilder,
        private route: Router) { }

  ngOnInit() {
      this.gettrack();
      this.getGenres();
      
  }
  gettrack(){
      this.edit.getTrack('http://104.197.128.152:8000/v1/tracks/' + this.activeRoute.snapshot.params['track']).subscribe(
      response =>{
          this.track = response;
//          this.track = new Track(this.track.id,this.track.title,this.track.rating,this.track.genres);
          if(this.track.genres.length==0)
              {
                  this.editForm = this.fb.group({
                        id: [this.track.id],
                        title: [this.track.title, Validators.required],
                    genres: this.fb.group({
                        id: ''
                    }),
                    rating: [this.track.rating]
                });
              }
          else
            {
                this.editForm = this.fb.group({
                        id: [this.track.id],
                      title: [this.track.title],
                    genres: this.fb.group({
                        id: [this.track.genres[0].id]
                    }),
                    rating:[this.track.rating]
                });
            }
      }
      );
  }
  getGenres(){
      this.edit.getAllGenres().subscribe(
      response =>{
          this.genres = response.results;
      }
      );
  }
  saveData(){
      if(this.editForm.value.genres.id == "")
          this.editForm.value.genres =[];
      else
          this.editForm.value.genres = [parseInt(this.editForm.value.genres.id)];
      this.edit.saveTrack(this.editForm.value).subscribe(
          response =>{
              console.log(response);
              this.route.navigate(['tracklist']);
      });
  }

}
