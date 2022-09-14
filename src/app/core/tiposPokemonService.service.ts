import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPokemonsResponseInterface } from '../model/interface/listaPokemonsResponseInterface';

@Injectable({
	providedIn: 'root'
})
export class TiposPokemonService {
	private url: string = environment.urlPokemon + 'type'

	constructor(
		private http: HttpClient
	) { }

	public getTiposPokemon(tipo?: string): Observable<ListaPokemonsResponseInterface> {
		return this.http.get<ListaPokemonsResponseInterface>(`${this.url}/${tipo ? tipo : ''}`)
	}
}
