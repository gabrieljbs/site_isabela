import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-insights',
  standalone: true,
  imports: [NgbCarouselModule, FormsModule, MatTabsModule,NgbNavModule],
  templateUrl: './news-insights.component.html',
  styleUrl: './news-insights.component.scss',
})
export class NewsInsightsComponent {
  slides: any[] = [
    {
      src: 'assets/image-11.webp',
      title: 'Zooming in on AI: When will the AI Act apply?',
      category: 'Opinion',
      description: 'Description for 1',
    },
    {
      src: 'assets/image-12.webp',
      title: 'Zooming in on AI: When will the AI Act apply?',
      category: 'article',
      description: 'Description for 2',
    },
    {
      src: 'assets/image-13.webp',
      title: 'Zooming in on AI: When will the AI Act apply?',
      category: 'insights',
      description: 'Description for 3',
    },
  ];

  constructor() {}

  previousSlideIndex: number = this.slides.length - 1;
  previousIndex: number = this.slides.length - 1;
  overlay: boolean = true;
  currentIndex: number = 0;
  intervalId: any;
  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  prevSlide() {
    this.previousSlideIndex = this.currentIndex; // Atualiza o índice da imagem anterior
    this.currentIndex =
      (this.currentIndex + this.slides.length - 1) % this.slides.length;
    this.previousIndex =
      (this.previousIndex + this.slides.length - 1) % this.slides.length;
  }

  nextSlide() {
    this.previousSlideIndex = this.currentIndex; // Atualiza o índice da imagem anterior
    this.currentIndex =
      (this.currentIndex + this.slides.length + 1) % this.slides.length;
    this.previousIndex =
      (this.previousIndex + this.slides.length +1) % this.slides.length;
  }
}
