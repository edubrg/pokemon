import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonInterface } from '../model/interface/pokemon/pokemonInterface';
import { ListaPokemonsResponseInterface } from '../model/interface/listaPokemonsResponseInterface';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	private url: string = environment.urlPokemon + 'pokemon'

	constructor(private http: HttpClient) { }

	public getPokemon(nomePokemon: string): Observable<PokemonInterface> {
			return this.http.get<PokemonInterface>(`${this.url}/${nomePokemon}`);
	}

	public getListaPokemon(limit: number = 9, offset: number = 0): Observable<ListaPokemonsResponseInterface> {
		return this.http.get<ListaPokemonsResponseInterface>(`${this.url}?limit=${limit}&offset=${offset}`);
	}
}
