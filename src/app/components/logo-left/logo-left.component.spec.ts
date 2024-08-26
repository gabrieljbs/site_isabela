import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLeftComponent } from './logo-left.component';

describe('LogoLeftComponent', () => {
  let component: LogoLeftComponent;
  let fixture: ComponentFixture<LogoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
