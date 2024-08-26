import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNavComponent } from './select-nav.component';

describe('SelectNavComponent', () => {
  let component: SelectNavComponent;
  let fixture: ComponentFixture<SelectNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
