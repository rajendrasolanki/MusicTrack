import { Component, OnInit } from '@angular/core';
import {AddTrackService} from '../service/add-track/add-track.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-track-add',
  templateUrl: './track-add.component.html',
  styleUrls: ['./track-add.component.css'],
  providers: [AddTrackService]
})
export class TrackAddComponent implements OnInit {
    public genres;
    public addForm: FormGroup;
    constructor(private addTrack: AddTrackService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.getGenres();
      this.addForm = this.fb.group({
          title: ['', Validators.required],
          rating: ['', [Validators.required, Validators.pattern('[0-9]{1}\.[0-9]{1}')]],
          genres: this.fb.group(
          {
              id:''
          })
      });
  }
  getGenres(){
      this.addTrack.getAllGenres().subscribe(
      response =>{
          this.genres = response.results;
      }
      );
  }
  saveData(){
      if (this.addForm.status=='VALID'){
      if (this.addForm.value.genres.id == "")
          this.addForm.value.genres =[];
      else
          this.addForm.value.genres = [parseInt(this.addForm.value.genres.id)];
      this.addForm.value.rating = parseInt(this.addForm.value.rating);
      this.addTrack.saveData(this.addForm.value).subscribe(
      response =>{
          console.log(response);
          this.router.navigate(['tracklist']);
      });
  }
  }

}
