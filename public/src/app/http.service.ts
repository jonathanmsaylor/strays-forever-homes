import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllPets() { return this._http.get<{ cats: any[], dogs: any[] }>('/api/pets'); }
  
  getCatById(_id) {
    console.log('getCatById');
    let breedquestion = this._http.get(`/api/pets/${_id}/editcat`);
    return breedquestion;
  }
  getDogById(_id) {
    console.log('getDogById');
    let breedquestion = this._http.get(`/api/pets/${_id}/editdog`);
    return breedquestion;
  }
  updateCatInfo(breedObj) {
    console.log('UpdateCat')
    return this._http.post('/api/pets/' + breedObj._id + '/updatecat', breedObj);
  }
  updateDogInfo(breedObj) {
    console.log('UpdateDog')
    return this._http.post('/api/pets/' + breedObj._id + '/updatedog', breedObj);
  }
  postNewCat(breedObj) {
    console.log('postnewCat')
    return this._http.post('/api/pets/newcat', breedObj);
  }
  postNewDog(breedObj) {
    console.log('postnewDog')
    return this._http.post('/api/pets/newdog', breedObj);
  }
  // removeQuestionById(breedObj){
  //   console.log('deleteProduct', breedObj);
  //   return this._http.post('/api/pets/'+breedObj._id+'/delete', breedObj);
  // }
}