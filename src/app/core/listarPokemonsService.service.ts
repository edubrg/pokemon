import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListaPokemonsResponseInterface } from '../model/interface/listaPokemonsResponseInterface';

@Injectable({
	providedIn: 'root'
})
export class ListarPokemonsService {
	private url: string = environment.urlPokemon + 'pokemon?limit=9&offset=0'

	constructor(private http: HttpClient) { }

	public get(limit: number = 10, offset: number = 0): Observable<ListaPokemonsResponseInterface> {
		return this.http.get<ListaPokemonsResponseInterface>(`${this.url}?limit=${limit}&offset=${offset}`);
	}
}
