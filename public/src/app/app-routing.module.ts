import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { BreedQuestionPageComponent } from './breed-question-page/breed-question-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';


const routes: Routes = [
  {path: '', pathMatch:'full', component: HomePageComponent},
  {path: 'cats/new', component: QuestionPageComponent},
  {path: 'cats/:id', component: BreedQuestionPageComponent},
  {path: 'cats/:id/edit', component: EditPageComponent},
  {path: 'cats/:id/postpet', component: HomePageComponent},
  {path: 'cats/:id/update', component: HomePageComponent},
  // {path: 'cats/:id/delete', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
