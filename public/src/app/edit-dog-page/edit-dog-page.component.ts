import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-dog-page',
  templateUrl: './edit-dog-page.component.html',
  styleUrls: ['./edit-dog-page.component.css']
})
export class EditDogPageComponent implements OnInit {
  dog = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router,) { }
     
  ngOnInit() {
    this._route.params.subscribe((data)=>{
      var _id = data.id;
      console.log('dog id is:', _id);
      var tempObeservable = this._httpService.getDogById(_id);
      tempObeservable .subscribe((data:any)=>{
        console.log('got data', data);
        this.dog = data;
      })
    })
  }
  updateDog() {
      console.log('updatedog', this.dog);
      var tempObservable = this._httpService.updateDogInfo(this.dog);
      tempObservable.subscribe((data:any) => {
        console.log('got a response', data);
        this.dog = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
        this._router.navigate(['/']);
      })
  }
}
