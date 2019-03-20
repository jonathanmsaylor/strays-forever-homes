import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getAllPets(){
    console.log('getAllPets');
    return this._http.get('/api/pets');
  }
  getCatById(_id){
    console.log('getCatById');
    let breedquestion = this._http.get(`/api/cats/${_id}/edit`);
    return breedquestion;
  }
  getDogById(_id){
    console.log('getDogById');
    let breedquestion = this._http.get(`/api/dogs/${_id}/edit`);
    return breedquestion;
  }
  updateCatInfo(breedObj){
    console.log('UpdateCat')
    return this._http.post('/api/cats/'+breedObj._id+'/update', breedObj);
  }
  updateDogInfo(breedObj){
    console.log('UpdateDog')
    return this._http.post('/api/dogs/'+breedObj._id+'/update', breedObj);
  }
  postNewCat(breedObj){
    console.log('postnewCat')
    return this._http.post('/api/cats/new', breedObj);
  }
  postNewdog(breedObj){
    console.log('postnewDog')
    return this._http.post('/api/dogs/new', breedObj);
  }
  // removeQuestionById(breedObj){
  //   console.log('deleteProduct', breedObj);
  //   return this._http.post('/api/cats/'+breedObj._id+'/delete', breedObj);
  // }
}