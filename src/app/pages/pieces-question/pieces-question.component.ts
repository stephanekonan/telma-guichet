import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pieces-question',
  templateUrl: './pieces-question.component.html',
  styleUrls: ['./pieces-question.component.css']
})
export class PiecesQuestionComponent {

  isLoading = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  showLoader() {
    this.spinner.show();
  }

  hideLoader() {
    this.spinner.hide();
  }

  switchNextPage() {
    this.isLoading = true;
    this.showLoader();
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/piecequestion']);
      this.hideLoader();
    }, 1000);
  }

}
