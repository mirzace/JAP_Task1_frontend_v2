import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Screenplay } from 'src/app/core/models/screenplay.model';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';

@Component({
  selector: 'app-screenplay-detail',
  templateUrl: './screenplay-detail.component.html',
  styleUrls: ['./screenplay-detail.component.sass']
})
export class ScreenplayDetailComponent implements OnInit {

  screenplay: Screenplay;

  constructor(
    private screenplayService: ScreenplayService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      console.log(paramMap);
      if (paramMap.has("id")) {
        const id = paramMap.get("id");
        this.screenplayService.getScreenplay(parseInt(id)).subscribe( res => {
          this.screenplay = res;
        });
      }
    });
  }
}
