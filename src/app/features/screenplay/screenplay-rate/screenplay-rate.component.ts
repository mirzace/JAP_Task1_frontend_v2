import { Component, OnInit } from '@angular/core';
import { PagedList } from 'src/app/core/models/pagedList.model';
import { Screenplay } from 'src/app/core/models/screenplay.model';
import { ScreenplaysSearch } from 'src/app/core/models/screenplaysSearch.model';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';

@Component({
  selector: 'app-screenplay-rate',
  templateUrl: './screenplay-rate.component.html',
  styleUrls: ['./screenplay-rate.component.sass']
})
export class ScreenplayRateComponent implements OnInit {

  screenplays: Screenplay[] = [];
  pagedList : PagedList<Screenplay>;
  screenplayParams : ScreenplaysSearch;

  // Rating
  max = 5;
  rate = 1;
  isReadonly = false;
  overStar: number | undefined;
  
  constructor(private screenplayService : ScreenplayService) {
    this.screenplayParams = this.screenplayService.resetScreenplayParams();
  }

  ngOnInit(): void {
    this.loadScreenplays();
  }

  loadScreenplays() {
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.screenplayService.getScreenplays(this.screenplayParams).subscribe( res => {
      this.pagedList = res;
      this.screenplays = this.screenplays.concat(res.items);
    })
  }

  loadMore() {
    this.screenplayParams.pageNumber = ++this.screenplayParams.pageNumber;
    this.screenplayService.setScreenplayParams(this.screenplayParams);
    this.loadScreenplays();
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  logClick(event: any) {
    this.isReadonly = true;
  }

}

