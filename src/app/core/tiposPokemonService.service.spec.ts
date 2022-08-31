/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TiposPokemonService } from './tiposPokemonService.service';

describe('Service: TiposPokemonService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TiposPokemonService]
		});
	});

	it('should ...', inject([TiposPokemonService], (service: TiposPokemonService) => {
		expect(service).toBeTruthy();
	}));
});
