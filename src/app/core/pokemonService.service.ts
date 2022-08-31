import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonInterface } from '../model/interface/pokemon/pokemonInterface';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {
	private url: string = environment.urlPokemon + 'pokemon'

	constructor(private http: HttpClient) { }

	public get(nomePokemon: string): Observable<PokemonInterface> {
		return this.http.get<PokemonInterface>(`${this.url}/${nomePokemon}`);
	}
}
