import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoLeftComponent } from './components/logo-left/logo-left.component';
import { NewHeaderComponent } from './components/new-header/new-header.component';
import { HttpClientModule } from '@angular/common/http'; 
import { DataService } from './services/dataServices/data.service'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet, HeaderComponent,FooterComponent,LogoLeftComponent, NewHeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front_tample';

  constructor() {}

  ngOnInit() {
   

  }
  
}
