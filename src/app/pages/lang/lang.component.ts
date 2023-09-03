import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router'; // Importez le Router
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent {

  isLoading = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private spinner: NgxSpinnerService
  ) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    if (browserLang) {
      translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
    } else {
      translate.use('fr');
    }
  }

  showLoader() {
    this.spinner.show();
  }

  hideLoader() {
    this.spinner.hide();
  }

  switchLanguage(language: string) {
    this.isLoading = true;
    this.showLoader();
    if (this.translate.currentLang === 'fr') {
      this.translate.use(language);
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/choixtodo']);
        this.hideLoader();
      }, 2000);
    } else {
      this.translate.use(language);
    }
  }

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

}
