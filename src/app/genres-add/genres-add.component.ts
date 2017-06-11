import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AddGenresService} from '../service/add-genres/add-genres.service';

@Component({
  selector: 'app-genres-add',
  templateUrl: './genres-add.component.html',
  styleUrls: ['./genres-add.component.css'],
  providers: [AddGenresService]
})
export class GenresAddComponent implements OnInit {
    public genres;
    public addForm: FormGroup;
    constructor(private add: AddGenresService, private fb: FormBuilder,
        private route: Router) { }

  ngOnInit() {
      this.addForm = this.fb.group({
          name: ['', Validators.required]
      });   
  }
  saveData(){
      if (this.addForm.status=='VALID'){
      this.add.saveGenres(this.addForm.value).subscribe(
          response =>{
              console.log(response);
              this.route.navigate(['genreslist']);
      });
  }
  }

}
