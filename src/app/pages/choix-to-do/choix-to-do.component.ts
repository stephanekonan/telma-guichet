import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-choix-to-do',
  templateUrl: './choix-to-do.component.html',
  styleUrls: ['./choix-to-do.component.css']
})
export class ChoixToDoComponent {

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
    }, 2000);
  }

}
