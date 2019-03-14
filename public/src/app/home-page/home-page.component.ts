import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  newQuestion: any;
  cats = [];
  cat = {breedname: ''};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router, ) { }

  ngOnInit() {
    var tempObeservable = this._httpService.getAllQuestions();
    tempObeservable.subscribe((data: any) => {
      console.log('got a response from ngoninit', data);
      this.cats = data;
    });
  }
  breedQuestionPage() {
    this._route.params.subscribe((data) => {
      var id = data.id;
      console.log('quesiton id is:', id);
      // 2. USE THE ID TO MAKE A REQUEST TO THE BACKEND
      var tempObeservable = this._httpService.getCatById(id);
      tempObeservable.subscribe((data: any) => {
        this.cats = data;
      })
    })
  }

  // removeQuestion(_id) {
  //   var tempObeservable = this._httpService.removeQuestionById(_id);
  //   tempObeservable.subscribe((data: any) => {
  //     console.log('got a response from delete');
  //     var tempObeservable = this._httpService.getAllQuestions();
  //     tempObeservable.subscribe((data: any) => {
  //       console.log('got a response from ngoninit', data);
  //       this.cats = data;
  //     })
  //   })
  // }
}
