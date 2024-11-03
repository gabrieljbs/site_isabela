import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaConfidencialidadeComponent } from './politica-confidencialidade.component';

describe('PoliticaConfidencialidadeComponent', () => {
  let component: PoliticaConfidencialidadeComponent;
  let fixture: ComponentFixture<PoliticaConfidencialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaConfidencialidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticaConfidencialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
