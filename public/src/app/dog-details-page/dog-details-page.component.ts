import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dog-details-page',
  templateUrl: './dog-details-page.component.html',
  styleUrls: ['./dog-details-page.component.css']
})
export class DogDetailsPageComponent implements OnInit {
  dog = { _id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: '' };

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router, ) { }

  ngOnInit() {
    // 1. GET THE ID FROM THE URL
    this._route.params.subscribe((data) => {
      var _id = data.id;
      console.log('dog id is:', _id);
      // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
      var tempObeservable = this._httpService.getDogById(_id);
      tempObeservable.subscribe((data: any) => {
        console.log('got data', data);
        this.dog = data;
        // 3. USE THE RESPONSE DATA TO CREATE THE RESTAURANT OBJECT
      })
    })
  }
  updateDog() {
    console.log('updatedog', this.dog);
    var tempObservable = this._httpService.updateDogInfo(this.dog);
    tempObservable.subscribe((data: any) => {
      console.log('got a response', data);
      this.dog = { _id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: '' };
      this._router.navigate(['/']);
    })
  }
}
