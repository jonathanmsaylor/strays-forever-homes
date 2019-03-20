import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
​import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewDogPageComponent } from './new-dog-page/new-dog-page.component';
import { EditDogPageComponent } from './edit-dog-page/edit-dog-page.component';
import { DogDetailsPageComponent } from './dog-details-page/dog-details-page.component';
import { CatDetailsPageComponent } from './cat-details-page/cat-details-page.component';
import { NewCatPageComponent } from './new-cat-page/new-cat-page.component';
import { EditCatPageComponent } from './edit-cat-page/edit-cat-page.component';


​

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditCatPageComponent,
    NewCatPageComponent,
    CatDetailsPageComponent,
    NewDogPageComponent,
    EditDogPageComponent,
    DogDetailsPageComponent
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
