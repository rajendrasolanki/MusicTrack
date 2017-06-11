import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {EditGenresService} from '../service/edit-genres/edit-genres.service';

@Component({
  selector: 'app-genres-edit',
  templateUrl: './genres-edit.component.html',
  styleUrls: ['./genres-edit.component.css'],
  providers: [EditGenresService]
})
export class GenresEditComponent implements OnInit {
    public genres;
    public editForm: FormGroup;
    constructor(private activeRoute: ActivatedRoute, private edit: EditGenresService, private fb: FormBuilder,
        private route: Router) { }

  ngOnInit() {
      this.getgenres();
      
  }
  getgenres(){
      this.edit.getGenres('http://104.197.128.152:8000/v1/genres/' + this.activeRoute.snapshot.params['genres']).subscribe(
      response =>{
          this.genres = response;
                  this.editForm = this.fb.group({
                        id: [this.genres.id],
                        name: [this.genres.name, Validators.required]
                });
  });
  }
  saveData(){
      if (this.editForm.status=='VALID'){
      this.edit.saveGenres(this.editForm.value).subscribe(
          response =>{
              console.log(response);
              this.route.navigate(['genreslist']);
      });
  }
  }

}
