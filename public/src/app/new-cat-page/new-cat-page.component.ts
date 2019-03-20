import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-cat-page',
  templateUrl: './new-cat-page.component.html',
  styleUrls: ['./new-cat-page.component.css']
})
export class NewCatPageComponent implements OnInit {
  cat = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
  newCat = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router,) { }
     
  ngOnInit() {
  }
  createCat() {
      console.log('createCat', this.newCat);
      // use the service to make a post request to the backend express server
      var tempObservable = this._httpService.postNewCat(this.newCat);
      tempObservable.subscribe((data:any) => {
        console.log('got a response', data);
        this.newCat = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
        this._router.navigate(['/']);
      })
  }
}
