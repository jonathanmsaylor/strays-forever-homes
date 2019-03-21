import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-dog-page',
  templateUrl: './new-dog-page.component.html',
  styleUrls: ['./new-dog-page.component.css']
})
export class NewDogPageComponent implements OnInit {
  dog = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
  newDog = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router,) { }
     
  ngOnInit() {
  }
  createDog() {
    console.log('createDog', this.newDog);
    // use the service to make a post request to the backend express server
    var tempObservable = this._httpService.postNewDog(this.newDog);
    tempObservable.subscribe((data:any) => {
      console.log('got a response', data);
      this.newDog = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
      this._router.navigate(['/']);
    })
}
}
