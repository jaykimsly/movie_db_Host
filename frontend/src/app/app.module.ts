import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OnViewComponent } from './components/on-view/on-view.component';
import { SearchComponent } from './components/search/search.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SplashComponent } from './components/splash/splash.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionsPageComponent } from './components/suggestions-page/suggestions-page.component';
import { LatestMoviesPageComponent } from './components/latest-movies-page/latest-movies-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SignUpComponent,
    SignInComponent,
    OnViewComponent,
    SplashComponent,
    SearchComponent,
    ErrorPageComponent,
    BackButtonComponent,
    SuggestionsPageComponent,
    LatestMoviesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
