import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsDetailComponent } from './continents-detail.component';

describe('ContinentsDetailComponent', () => {
  let component: ContinentsDetailComponent;
  let fixture: ComponentFixture<ContinentsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
