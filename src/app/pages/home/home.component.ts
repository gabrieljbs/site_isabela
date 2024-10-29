import { Component, AfterViewInit, HostListener } from '@angular/core';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FindAnAdvisionComponent } from '../../components/find-an-advision/find-an-advision.component';
import { NewsInsightsComponent } from '../../components/news-insights/news-insights.component';
import { Router } from '@angular/router';
import { ExploreOurCapabilitesComponent } from '../../components/explore-our-capabilites/explore-our-capabilites.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgbScrollSpyModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    NgbCarouselModule,
    FindAnAdvisionComponent,
    NewsInsightsComponent,
    ExploreOurCapabilitesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements AfterViewInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  image: any = [
    { src: 'assets/image-1.webp', height: '500px' },
    { src: 'assets/image-2.webp', height: '250px' },
    { src: 'assets/image-3.webp', height: '500px' },
    { src: 'assets/image-4.webp', height: '500px' },
    { src: 'assets/image-5.webp', height: '250px' },
    { src: 'assets/image-6.webp', height: '500px' },
    { src: 'assets/image-7.webp', height: '250px' },
    { src: 'assets/image-8.webp', height: '500px' },
    { src: 'assets/image-9.webp', height: '250px' },
    { src: 'assets/image-10.webp', height: '500px' },
  ];
constructor(private route: Router){

}

naviagete(path:string){
  this.route.navigate(['/',path])
}

  ngAfterViewInit(): void {
    const curtain = document.getElementById('curtain') as HTMLElement;

    if (curtain) {
      setTimeout(() => {
        curtain.classList.add('open');
      }, 500);
    }
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const scrollDown = document.querySelector('.scroll-down') as HTMLElement;
      const scroll = document.querySelector('.scroll-animated') as HTMLElement;

      if (scrollDown) {
        window.addEventListener('scroll', () => {
          const scrollPosition = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

          const scrollPercentage = scrollPosition / maxScroll;

          const newHeight = 70 + scrollPercentage * 5000;
          const newOpacity = Math.max(0, 1 - scrollPercentage * 10);

          scrollDown.style.height = `${newHeight}px`;
          scrollDown.style.opacity = `${newOpacity}`;
          scroll.style.opacity = `${newOpacity}`;
        });
      }
    });
  }
}
