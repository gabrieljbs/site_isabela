import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesDetailComponent } from './industries-detail.component';

describe('IndustriesDetailComponent', () => {
  let component: IndustriesDetailComponent;
  let fixture: ComponentFixture<IndustriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
