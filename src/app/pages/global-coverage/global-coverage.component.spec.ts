import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCoverageComponent } from './global-coverage.component';

describe('GlobalCoverageComponent', () => {
  let component: GlobalCoverageComponent;
  let fixture: ComponentFixture<GlobalCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalCoverageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
