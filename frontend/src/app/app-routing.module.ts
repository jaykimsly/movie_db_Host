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
import { ActionComponent } from './components/action/action.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { DramaComponent } from './components/drama/drama.component';
import { FamilyComponent } from './components/family/family.component';
import { KidsComponent } from './components/kids/kids.component';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'error-page', component: ErrorPageComponent},
  {path: 'view', component: OnViewComponent},
  {path: '', component: CardComponent},
  {path: 'latest-movies', component: LatestMoviesPageComponent},
  {path: 'suggestions', component: SuggestionsPageComponent},
  {path: 'splash', component: SplashComponent},
  {path: 'action', component: ActionComponent},
  {path: 'comedy', component: ComedyComponent},
  {path: 'drama', component: DramaComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'kids', component: KidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
