import { TestBed, inject } from '@angular/core/testing';

import { AceleratoGoService } from './acelerato-go.service';

describe('AceleratoGoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AceleratoGoService]
    });
  });

  it('should be created', inject([AceleratoGoService], (service: AceleratoGoService) => {
    expect(service).toBeTruthy();
  }));
});
