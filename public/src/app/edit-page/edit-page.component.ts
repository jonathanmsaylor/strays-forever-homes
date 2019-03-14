import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  cat = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router,) { }
     
  ngOnInit() {
    this._route.params.subscribe((data)=>{
      var _id = data.id;
      console.log('cat id is:', _id);
      var tempObeservable = this._httpService.getCatById(_id);
      tempObeservable .subscribe((data:any)=>{
        console.log('got data', data);
        this.cat = data;
      })
    })
  }
  updateCat() {
      console.log('updatecat', this.cat);
      var tempObservable = this._httpService.updateCatInfo(this.cat);
      tempObservable.subscribe((data:any) => {
        console.log('got a response', data);
        this.cat = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
        this._router.navigate(['/']);
      })
  }
}
