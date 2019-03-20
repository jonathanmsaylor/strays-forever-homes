import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cat-details-page',
  templateUrl: './cat-details-page.component.html',
  styleUrls: ['./cat-details-page.component.css']
})
export class CatDetailsPageComponent implements OnInit {
  cat = { _id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: '' };

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router, ) { }

  ngOnInit() {
    // 1. GET THE ID FROM THE URL
    this._route.params.subscribe((data) => {
      var _id = data.id;
      console.log('cat id is:', _id);
      // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
      var tempObeservable = this._httpService.getCatById(_id);
      tempObeservable.subscribe((data: any) => {
        console.log('got data', data);
        this.cat = data;
        // 3. USE THE RESPONSE DATA TO CREATE THE RESTAURANT OBJECT
      })
    })
  }
  updateCat() {
    console.log('updatecat', this.cat);
    var tempObservable = this._httpService.updateCatInfo(this.cat);
    tempObservable.subscribe((data: any) => {
      console.log('got a response', data);
      this.cat = { _id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: '' };
      this._router.navigate(['/']);
    })
  }
}
