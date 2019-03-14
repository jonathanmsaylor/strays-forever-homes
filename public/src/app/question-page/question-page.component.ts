import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  cat = {_id: '', breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
  newQuestion = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};

  // newRestaurant= {name: '', cuisine: ''};

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router,) { }
     
  ngOnInit() {
  }
  createQuestion() {
      console.log('createQuestion', this.newQuestion);
      // use the service to make a post request to the backend express server
      var tempObservable = this._httpService.postNewQuestion(this.newQuestion);
      tempObservable.subscribe((data:any) => {
        console.log('got a response', data);
        this.newQuestion = { breedname: '', age: '', gender: '', comfortablecatdog: '', comfortablekids: '', health: ''};
        this._router.navigate(['/']);
      })
  }
}
