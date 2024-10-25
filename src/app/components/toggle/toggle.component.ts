import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {


  changeLanguage(lang: any) {
    console.log(lang);
    /* const url = this.location.path();
    window.location.href = `/${lang}${url}`; */
  }
}
