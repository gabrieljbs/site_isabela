import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOurCapabilitesComponent } from './explore-our-capabilites.component';

describe('ExploreOurCapabilitesComponent', () => {
  let component: ExploreOurCapabilitesComponent;
  let fixture: ComponentFixture<ExploreOurCapabilitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreOurCapabilitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreOurCapabilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
