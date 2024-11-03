import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaAnticorrupcaoComponent } from './politica-anticorrupcao.component';

describe('PoliticaAnticorrupcaoComponent', () => {
  let component: PoliticaAnticorrupcaoComponent;
  let fixture: ComponentFixture<PoliticaAnticorrupcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaAnticorrupcaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticaAnticorrupcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
