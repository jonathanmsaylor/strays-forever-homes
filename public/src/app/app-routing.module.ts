import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewDogPageComponent } from './new-dog-page/new-dog-page.component';
import { EditDogPageComponent } from './edit-dog-page/edit-dog-page.component';
import { DogDetailsPageComponent } from './dog-details-page/dog-details-page.component';
import { CatDetailsPageComponent } from './cat-details-page/cat-details-page.component';
import { NewCatPageComponent } from './new-cat-page/new-cat-page.component';
import { EditCatPageComponent } from './edit-cat-page/edit-cat-page.component';


const routes: Routes = [
  {path: '', pathMatch:'full', component: HomePageComponent},
  {path: 'cats/new', component: NewCatPageComponent},
  {path: 'cats/:id', component: CatDetailsPageComponent},
  {path: 'cats/:id/edit', component: EditCatPageComponent},
  {path: 'cats/:id/postpet', component: HomePageComponent},
  {path: 'cats/:id/update', component: HomePageComponent},
  {path: 'dogs/new', component: NewDogPageComponent},
  {path: 'dogs/:id', component: DogDetailsPageComponent},
  {path: 'dogs/:id/edit', component: EditDogPageComponent},
  {path: 'dogs/:id/postpet', component: HomePageComponent},
  {path: 'dogs/:id/update', component: HomePageComponent},
  // {path: 'cats/:id/deletecat', component: HomePageComponent},
  // {path: 'dogs/:id/deletedog', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
