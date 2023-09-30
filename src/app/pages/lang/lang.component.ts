import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
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
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    if (browserLang) {
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    } else {
      translate.use('en');
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
    console.log(this.translate.currentLang);
    if (this.translate.currentLang === 'en') {
      this.translate.use(language);
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/choixtodo']);
        this.hideLoader();
      }, 1000);
    } else {
      this.translate.use(language);
    }
  }

  ngOnInit() {
    this.translate.setDefaultLang('fr');
  }

}
