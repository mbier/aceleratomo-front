import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroGeralComponent } from './quadro-geral.component';

describe('QuadroGeralComponent', () => {
  let component: QuadroGeralComponent;
  let fixture: ComponentFixture<QuadroGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
