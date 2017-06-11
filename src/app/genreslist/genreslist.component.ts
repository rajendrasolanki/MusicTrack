import { Component, OnInit } from '@angular/core';
import {AllGenresService} from '../service/all-genres/all-genres.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-genreslist',
  templateUrl: './genreslist.component.html',
  styleUrls: ['./genreslist.component.css'],
  providers: [AllGenresService]
})
export class GenreslistComponent implements OnInit {
    public genresList;
    private Pages;
    private Url='http://104.197.128.152:8000/v1/genres';
    static currentPage;
    private nextPageUrl;
    private previousPageUrl;
    private totalPages;

    constructor(private allGenres: AllGenresService, private route: Router) { }

  ngOnInit() {
      this.getGenres();
   }
  getGenres(){
      if (GenreslistComponent.currentPage === undefined){
      this.allGenres.getAllGenres(this.Url).subscribe(
      response =>{
          this.genresList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.totalPages = parseInt(( (response.count%20) == 0?(response.count/20) :(response.count/20)+1 )+"");
          GenreslistComponent.currentPage=1;
          this.pageNo();
      }
      );
      }
      else
      {
          this.gotoPage(GenreslistComponent.currentPage);
      }
  }
  gotoPage(pageNo){
      this.allGenres.getAllGenres(this.Url + "?page=" + pageNo).subscribe(
      response =>{
          this.genresList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.totalPages = parseInt(( (response.count%20) == 0?(response.count/20) :(response.count/20)+1 )+"");
          GenreslistComponent.currentPage = pageNo;
          this.pageNo();
          
      }
      );          
  }
  nextPage(){
      if (this.nextPageUrl != null){
      this.allGenres.getAllGenres(this.nextPageUrl).subscribe(
      response =>{
          this.genresList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          GenreslistComponent.currentPage+=1;
          this.pageNo();
      }
      );
    }
  }
  previousPage(){
      if (this.previousPageUrl != null){
      this.allGenres.getAllGenres(this.previousPageUrl).subscribe(
      response =>{
          this.genresList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          GenreslistComponent.currentPage-=1;
          this.pageNo();
      }
      );
    }
  }
  pageNo(){
      if (GenreslistComponent.currentPage >= 1 && GenreslistComponent.currentPage <3)
      {
          this.Pages=[1,2,3,4,5];
      }
      else if (GenreslistComponent.currentPage > this.totalPages - 2 && GenreslistComponent.currentPage <= this.totalPages)
      {
          this.Pages = [this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
      }
      else
      {
          this.Pages = [GenreslistComponent.currentPage-2,GenreslistComponent.currentPage-1,GenreslistComponent.currentPage,GenreslistComponent.currentPage+1,GenreslistComponent.currentPage+2];
      }
  }
  edit(genres){
      this.route.navigate(['genres-edit',genres.id]);
  }
  add(){
      this.route.navigate(['genres-add']);
  }

}
