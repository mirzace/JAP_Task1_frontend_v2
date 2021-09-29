import { Component, Input, OnInit } from '@angular/core';
import { Rate } from 'src/app/core/models/rate.model';
import { ScreenplayService } from 'src/app/core/services/screenplay.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {

  @Input() screenplayId: any;

  stars = [1,2,3,4,5];
  rating = 0;
  hoverState =0;
  isReadonly = false;

  constructor(private screenplayService: ScreenplayService) { }

  ngOnInit(): void {
  }

  onStarEnter(starId: number){
    if(this.isReadonly) return;
    this.hoverState = starId;
  }

  onStarLeave(){
    if(this.isReadonly) return;
    this.hoverState = 0;
  }

  onStarClick(starId: number){
    if(this.isReadonly) return;
    this.isReadonly = true;
    this.rating = starId;

    const rate: Rate = {
      screenplayId: this.screenplayId,
      rate: this.rating
    };
    this.screenplayService.rateScreenplay(rate);
  }
}
