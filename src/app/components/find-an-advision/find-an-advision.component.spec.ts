import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnAdvisionComponent } from './find-an-advision.component';

describe('FindAnAdvisionComponent', () => {
  let component: FindAnAdvisionComponent;
  let fixture: ComponentFixture<FindAnAdvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAnAdvisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindAnAdvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
