import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-are-jou-piece',
  templateUrl: './are-jou-piece.component.html',
  styleUrls: ['./are-jou-piece.component.css']
})
export class AreJouPieceComponent {

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

  anwserResponse(response: string) {
    this.isLoading = true;
    this.showLoader();
    if(response === 'oui') {
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/piecequestion']);
        this.hideLoader();
      }, 1000);
    } else if(response === 'non') {
      setTimeout(() => {
        setTimeout(() => {
          this.router.navigate(['/'])
        }, 3500)
        this.hideLoader();
        Swal.fire({
          timer: 3000,
          icon: 'success',
          timerProgressBar: true,
          titleText: 'Merci, Bonne journée !',
          showConfirmButton: false,
          
        })
      })
    }
  }

}
