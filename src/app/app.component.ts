import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; 
import { NavbarComponent } from "./components/navbar/navbar.component"; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';
import { filter } from 'rxjs';
// register Swiper custom elements
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, FooterComponent, NavbarComponent,NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'front_tample';
  
  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  
  ngOnInit() {
    
    register();

  }
  
}
