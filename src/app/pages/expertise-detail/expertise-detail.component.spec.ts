import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseDetailComponent } from './expertise-detail.component';

describe('ExpertiseDetailComponent', () => {
  let component: ExpertiseDetailComponent;
  let fixture: ComponentFixture<ExpertiseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
