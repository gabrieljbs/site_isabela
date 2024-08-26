import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-insights',
  standalone: true,
  imports: [NgbCarouselModule, FormsModule, MatTabsModule],
  templateUrl: './news-insights.component.html',
  styleUrl: './news-insights.component.scss',
})
export class NewsInsightsComponent {
  image: string = 'assets/image-11.webp';
  index: any = 1;
  slides: any = [
    {
      src: 'assets/image-11.webp',
      title: 'Slide 1 Title',
      subTitle: 'INSIGHTS',
      discription:
        'The EU Corporate Sustainability Due Diligence Directive is final: how can companies prepare?',
    },
    {
      src: 'assets/image-12.webp',
      title: 'Slide 2 Title',
      subTitle: 'OPINION',
      discription:
        'The EU Corporate Sustainability Due Diligence Directive is final: how can companies prepare?',
    },
    {
      src: 'assets/image-13.webp',
      title: 'Slide 3 Title',
      subTitle: 'INSIGHTS ',
      discription:
        'The EU Corporate Sustainability Due Diligence Directive is final: how can companies prepare?',
    },
  ];
  constructor() {
    this.image = this.slides[this.index].src;
  }
  currentSlideIndex = 0;

  onSlideChange(event: any) {
    console.log(event.current
)
  }
  get currentTitle() {
    return this.slides[this.currentSlideIndex]?.title;
  }
}
