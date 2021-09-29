import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagedList } from 'src/app/core/models/pagedList.model';
import { Screenplay } from 'src/app/core/models/screenplay.model';
import { ScreenplaysSearch } from 'src/app/core/models/screenplaysSearch.model';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';

@Component({
  selector: 'app-screenplay-preview',
  templateUrl: './screenplay-preview.component.html',
  styleUrls: ['./screenplay-preview.component.sass']
})
export class ScreenplayPreviewComponent implements OnInit {

  screenplays: Screenplay[] =[];
  pagedList : PagedList<Screenplay>;
  screenplayParams : ScreenplaysSearch;

  constructor(private screenplayService : ScreenplayService) {
    this.screenplayParams = this.screenplayService.resetScreenplayParams();
  }

  ngOnInit(): void {
    this.loadScreenplays();
  }

  loadScreenplays() {
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.screenplayService.getScreenplays(this.screenplayParams).subscribe( (res: PagedList<Screenplay>) => {
      this.pagedList = res;
      this.screenplays = this.screenplays.concat(res.items);
    })
  }

  switchCategory(category: string) {
    this.screenplays = [];
    this.screenplayParams = this.screenplayService.resetScreenplayParams();
    this.screenplayParams.category = category;
    this.loadScreenplays();
  }

  loadMore() {
    this.screenplayParams.pageNumber = ++this.screenplayParams.pageNumber;
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.loadScreenplays();
  }
  
  onSearch(searchTerm: any){  
    if(searchTerm.length == 0) {
      this.screenplays = [];
      this.screenplayParams.search = "";
      this.screenplayParams.pageNumber = 1;
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
     

    if(searchTerm.length >= 2) {
      this.screenplays = [];
      this.screenplayParams.search = searchTerm;
      this.screenplayParams.pageNumber = 1;
      this.screenplayService.getScreenplays(this.screenplayParams);
      this.loadScreenplays();
    }
  }
}
