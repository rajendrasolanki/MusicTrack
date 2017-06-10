import { Component, OnInit } from '@angular/core';
import { AllTrackService } from '../service/all-track/all-track.service';
import { Router } from '@angular/router';
import { SearchTrackService } from '../service/search-track/search-track.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css'],
  providers: [AllTrackService, SearchTrackService]
})
export class TracklistComponent implements OnInit {
    public trackList;
    private isRate1=[];
    private isRate2=[];
    private isRate3=[];
    private isRate4=[];
    private isRate5=[];
    private Pages;
    private Url='http://104.197.128.152:8000/v1/tracks';
    public currentPage;
    private nextPageUrl;
    private previousPageUrl;
    private totalPages;
    private searchText;

    constructor(private allTracks: AllTrackService, private route: Router, private search: SearchTrackService) { }
    

  ngOnInit() {
      this.getTrack();
   }
  getTrack(){
      this.allTracks.getAllTrack(this.Url).subscribe(
      response =>{
          this.trackList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.totalPages = parseInt(( (response.count%20) == 0?(response.count/20) :(response.count/20)+1 )+"");
          this.currentPage=1;
          this.pageNo();
      }
      );
  }
  gotoPage(pageNo){
      this.allTracks.getAllTrack(this.Url + "?page=" + pageNo).subscribe(
      response =>{
          this.trackList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.currentPage = pageNo;
          this.pageNo();
          
      }
      );          
  }
  nextPage(){
      if (this.nextPageUrl != null){
      this.allTracks.getAllTrack(this.nextPageUrl).subscribe(
      response =>{
          this.trackList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.currentPage+=1;
          this.pageNo();
      }
      );
    }
  }
  previousPage(){
      if (this.previousPageUrl != null){
      this.allTracks.getAllTrack(this.previousPageUrl).subscribe(
      response =>{
          this.trackList = response.results;
          this.nextPageUrl = response.next;
          this.previousPageUrl = response.previous;
          this.currentPage-=1;
          this.pageNo();
      }
      );
    }
  }
  pageNo(){
      if (this.currentPage >= 1 && this.currentPage <3)
      {
          this.Pages=[1,2,3,4,5];
      }
      else if (this.currentPage > this.totalPages - 2 && this.currentPage <= this.totalPages)
      {
          this.Pages = [this.totalPages - 4, this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
      }
      else
      {
          this.Pages = [this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2];
      }
  }
  edit(track){
      this.route.navigate(['track-edit',track.id]);
  }
  add(){
      this.route.navigate(['track-add']);
  }
  rating(rate,index){
      rate = parseFloat(rate);
      this.isRate1[index] = false;
      this.isRate2[index] = false;
      this.isRate3[index] = false;
      this.isRate4[index] = false;
      this.isRate5[index] = false;
      if (rate>=9){
          this.isRate1[index] = true;
          this.isRate2[index] = true;
          this.isRate3[index] = true;
          this.isRate4[index] = true;
          this.isRate5[index] = true;
      } else if (rate>=7){
          this.isRate1[index] = true;
          this.isRate2[index] = true;
          this.isRate3[index] = true;
          this.isRate4[index] = true;
      } else if (rate>=5){
          this.isRate1[index] = true;
          this.isRate2[index] = true;
          this.isRate3[index] = true;
      } else if (rate>=3){
          this.isRate1[index] = true;
          this.isRate2[index] = true;
      } else if (rate>=1){
          this.isRate1[index] = true;
      }
  }
  onKeyUp(event){
      this.searchText = event.target.value;
  }
  searchTrack(){
      this.search.SearchAllTrack(this.searchText).subscribe(
      response =>{
          this.trackList = response.results;
      });
  }

}
