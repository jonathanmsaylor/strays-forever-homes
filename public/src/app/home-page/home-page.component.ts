import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  newCat: any;
  newDog: any;
  cats = [];
  dogs = [];
  // cat = {breedname: ''};
  // dog = {breedname: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router, ) { }

  ngOnInit() {
    var tempObeservable = this._httpService.getAllPets();
    tempObeservable.subscribe(({ cats, dogs }) => {
      console.log('got a response from ngoninit', cats, dogs);
      this.dogs = dogs;
      this.cats = cats;
    });
  }
  CatDetailsPage() {
    this._route.params.subscribe((data) => {
      var id = data.id;
      console.log('cat id is:', id);
      // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
      var tempObeservable = this._httpService.getCatById(id);
      tempObeservable.subscribe((data: any) => {
        this.cats = data;
      })
    })
  }
  DogDetailsPage() {
    this._route.params.subscribe((data) => {
      var id = data.id;
      console.log('dog id is:', id);
      // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
      var tempObeservable = this._httpService.getDogById(id);
      tempObeservable.subscribe((data: any) => {
        this.dogs = data;
      })
    })
  }

  removeDog(_id) {
    var tempObeservable = this._httpService.removeDogById(_id);
    tempObeservable.subscribe((data: any) => {
      console.log('got a response from delete');
      var tempObeservable = this._httpService.getAllPets();
      tempObeservable.subscribe((data: any) => {
        console.log('got a response from ngoninit', data);
        this.dogs = data;
      })
    })
  }
  removeCat(_id) {
    var tempObeservable = this._httpService.removeCatById(_id);
    tempObeservable.subscribe((data: any) => {
      console.log('got a response from delete');
      var tempObeservable = this._httpService.getAllPets();
      tempObeservable.subscribe((data: any) => {
        console.log('got a response from ngoninit', data);
        this.cats = data;
      })
    })
  }
}
