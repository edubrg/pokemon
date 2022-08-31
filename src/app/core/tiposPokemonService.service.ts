import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiposPokemonResponseInterface } from '../model/interface/tiposPokemonResponse';


@Injectable({
	providedIn: 'root'
})
export class TiposPokemonService {
	private url: string = environment.urlPokemon + 'type'

	constructor(
		private http: HttpClient
	) { }

	public getTiposPokemon(): Observable<TiposPokemonResponseInterface> {
		return this.http.get<TiposPokemonResponseInterface>(this.url)
	}
}
