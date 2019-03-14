import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
​import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { BreedQuestionPageComponent } from './breed-question-page/breed-question-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

​

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditPageComponent,
    BreedQuestionPageComponent,
    QuestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
