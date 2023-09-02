import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LangComponent } from './pages/lang/lang.component';
import { ChoixToDoComponent } from './pages/choix-to-do/choix-to-do.component';
import { PiecesQuestionComponent } from './pages/pieces-question/pieces-question.component';
import { NationaliteQuestionComponent } from './pages/nationalite-question/nationalite-question.component';
import { PiecesComponent } from './pages/pieces/pieces.component';
import { RectoVersoPieceComponent } from './pages/recto-verso-piece/recto-verso-piece.component';
import { UserCaptureComponent } from './pages/user-capture/user-capture.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaceMoneyComponent } from './pages/place-money/place-money.component';
import { RecapFormComponent } from './pages/recap-form/recap-form.component';
import { RemerciementsComponent } from './pages/remerciements/remerciements.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent 
  },
  {
    path: "lang",
    component: LangComponent
  },
  {
    path: "choixtodo",
    component: ChoixToDoComponent
  },
  {
    path: "piecequestion",
    component: PiecesQuestionComponent
  },
  {
    path: "nationalitequestion",
    component: NationaliteQuestionComponent
  },
  {
    path: "pieces",
    component: PiecesComponent
  },
  {
    path: "rectoversopiece",
    component: RectoVersoPieceComponent
  },
  {
    path: "usercapture",
    component: UserCaptureComponent
  },
  {
    path: "recapform",
    component: RecapFormComponent
  },
  {
    path: "placemoney",
    component: PlaceMoneyComponent
  },
  {
    path: "remerciements",
    component: RemerciementsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
