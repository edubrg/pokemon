/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FiltrosService } from './filtros.service';

describe('Service: Filtros', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiltrosService]
    });
  });

  it('should ...', inject([FiltrosService], (service: FiltrosService) => {
    expect(service).toBeTruthy();
  }));
});
