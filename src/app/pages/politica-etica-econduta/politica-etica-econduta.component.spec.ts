import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaEticaECondutaComponent } from './politica-etica-econduta.component';

describe('PoliticaEticaECondutaComponent', () => {
  let component: PoliticaEticaECondutaComponent;
  let fixture: ComponentFixture<PoliticaEticaECondutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaEticaECondutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticaEticaECondutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
