import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAtuacaoComponent } from './tabs-atuacao.component';

describe('TabsAtuacaoComponent', () => {
  let component: TabsAtuacaoComponent;
  let fixture: ComponentFixture<TabsAtuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsAtuacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsAtuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
