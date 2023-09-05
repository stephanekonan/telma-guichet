import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './layouts/material.module';
import { PrimengsModule } from './layouts/primeng.module';

import { AppComponent } from './app.component';
import { LangComponent } from './pages/lang/lang.component';
import { ChoixToDoComponent } from './pages/choix-to-do/choix-to-do.component';
import { PiecesQuestionComponent } from './pages/pieces-question/pieces-question.component';
import { NationaliteQuestionComponent } from './pages/nationalite-question/nationalite-question.component';
import { PiecesComponent } from './pages/pieces/pieces.component';
import { RectoVersoPieceComponent } from './pages/recto-verso-piece/recto-verso-piece.component';
import { UserCaptureComponent } from './pages/user-capture/user-capture.component';
import { RecapFormComponent } from './pages/recap-form/recap-form.component';
import { PlaceMoneyComponent } from './pages/place-money/place-money.component';
import { RemerciementsComponent } from './pages/remerciements/remerciements.component';
import { HomeComponent } from './pages/home/home.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AreJouPieceComponent } from './pages/are-jou-piece/are-jou-piece.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LangComponent,
    ChoixToDoComponent,
    PiecesQuestionComponent,
    NationaliteQuestionComponent,
    PiecesComponent,
    RectoVersoPieceComponent,
    UserCaptureComponent,
    RecapFormComponent,
    PlaceMoneyComponent,
    RemerciementsComponent,
    HomeComponent,
    AreJouPieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PrimengsModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule,
    ToastNoAnimation,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
