/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonService } from './pokemonService.service';

describe('Service: PokemonService', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      providers: [PokemonService]
    });
  });

  it('should ...', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
