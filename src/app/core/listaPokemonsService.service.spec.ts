/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarPokemonsService } from './listarPokemonsService.service';

describe('Service: ListaPokemonsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ListarPokemonsService]
		});
	});

	it('should ...', inject([ListarPokemonsService], (service: ListarPokemonsService) => {
		expect(service).toBeTruthy();
	}));
});
