import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FiltrosService {

	private filtroTipo = new BehaviorSubject<string>(undefined!);
	private filtroPokemon = new BehaviorSubject<string>(undefined!);

	public getFiltroTipo(): Observable<string> {
		return this.filtroTipo.asObservable();
	}

	public setFiltroTipo(value: string): void {
		this.filtroTipo.next(value);
	}

	public getFiltroNomeOuIdPokemon(): Observable<string> {
		return this.filtroPokemon.asObservable();
	}

	public setFiltroNomeOuIdPokemon(nomeOuIdPokemon: string): void {
		this.filtroPokemon.next(nomeOuIdPokemon);
	}
}
