import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

import { ErrorPageComponent } from './components/error-page/error-page.component';
import { OnViewComponent } from './components/on-view/on-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SplashComponent } from './components/splash/splash.component';
import { LatestMoviesPageComponent } from './components/latest-movies-page/latest-movies-page.component';
import { SuggestionsPageComponent } from './components/suggestions-page/suggestions-page.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'view', component: OnViewComponent},
  {path: 'movies', component: CardComponent},
  {path: 'latest-movies', component: LatestMoviesPageComponent},
  {path: 'suggestions', component: SuggestionsPageComponent},
  {path: '', component: SplashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
