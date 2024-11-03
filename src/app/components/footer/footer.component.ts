import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  globalCoverage: any;
  industries: any;
  expertise: any;
  constructor(
    private router: Router,
  ) {
  }

  navigate(path: string, page: string) {
    switch (page) {
      case 'Expertise':
        this.router.navigate(['/expertise/', path]);
        break;
      case 'Industrie':
        this.router.navigate(['/industrie', path]);
        break;
      case 'Global Coverage':
        this.router.navigate(['/global-coverage/', path]);
        break;
      case '':
        this.router.navigate(['/', path]);
        break;
    }
  }
}
