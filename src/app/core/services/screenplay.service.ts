import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Screenplay } from '../models/screenplay.model';
import { ScreenplaysSearch } from '../models/screenplaysSearch.model';
import { Observable, of } from 'rxjs';
import { Rate } from '../models/rate.model';
import { PagedList } from '../models/pagedList.model';
import { baseSearchRoute } from '../utils/baseSearchRoute.model';

@Injectable({
  providedIn: 'root'
})
export class ScreenplayService {

  baseUrl = environment.apiUrl;
  screenplaysCache = new Map();
  screenplaysParams: ScreenplaysSearch =  new ScreenplaysSearch();

  constructor(private http: HttpClient) { }

  setScreenplayParams(params: ScreenplaysSearch) {
    this.screenplaysParams = params;
  }

  resetScreenplayParams() {
    this.screenplaysParams = new ScreenplaysSearch();
    return this.screenplaysParams;
  }

  getScreenplays(screenplayParams: ScreenplaysSearch) : Observable<PagedList<Screenplay>> {
    let response = this.screenplaysCache.get(Object.values(screenplayParams).join('-'));

    if(response) {
      return of(response);
    }

    let queryParams: string[] = [this.baseUrl + 'screenplays?', baseSearchRoute(screenplayParams)]

    if(screenplayParams?.category) {
      queryParams.push(`Category=${screenplayParams.category}`);
    }

    if(screenplayParams?.search) {
      queryParams.push(`Search=${screenplayParams.search}`);
    }

    return this.http.get<PagedList<Screenplay>>(queryParams.join('&')).pipe(
      map((res: any) => {
        this.screenplaysCache.set(Object.values(screenplayParams).join('-'), res);
        return res;
      } ),
      catchError(() => of("Can not load screenplays"))
    );
  }

  getScreenplay(id: number) {
    const screenplay = [...this.screenplaysCache.values()]
      .reduce( (arr, elem) => arr.concat(elem.items), [] )
      .find((screenplay : Screenplay) => screenplay.id === id);

    if(screenplay){
      return of(screenplay);
    }
    return this.http.get<Screenplay>(this.baseUrl + 'screenplays/' + id)
      .pipe( map((response: any) => {
        return response;
      }));
  }

  rateScreenplay(model: Rate) {
    this.http.post(this.baseUrl + 'ratings', model).subscribe( (res: any) => {
      //Update local array
      const screenplay = [...this.screenplaysCache.values()]
      .reduce( (arr, elem) => arr.concat(elem.items), [] )
      .find((screenplay : Screenplay) => screenplay.id === model.screenplayId);
      screenplay.averageRate = res.averageRate;
    });
  }
}
