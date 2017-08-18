import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroTesteComponent } from './quadro-teste.component';

describe('QuadroTesteComponent', () => {
  let component: QuadroTesteComponent;
  let fixture: ComponentFixture<QuadroTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
