import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getAllQuestions(){
    console.log('getAllQuestions');
    return this._http.get('/api/cats');
  }
  getCatById(_id){
    console.log('getCatById');
    let breedquestion = this._http.get(`/api/cats/${_id}/edit`);
    return breedquestion;
  }
  getCatByIdTwo(_id){
    console.log('getCatByIdTwo');
    return this._http.get(`/api/cats/${_id}/catspage`, _id);
  }
  updateCatInfo(breedObj){
    console.log('UpdateCat')
    return this._http.post('/api/cats/'+breedObj._id+'/update', breedObj);
  }
  postNewQuestion(breedObj){
    console.log('postnewQuestion')
    return this._http.post('/api/cats/new', breedObj);
  }
  // removeQuestionById(breedObj){
  //   console.log('deleteProduct', breedObj);
  //   return this._http.post('/api/cats/'+breedObj._id+'/delete', breedObj);
  // }
}