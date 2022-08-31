import { PokemonInterface } from './../../model/interface/pokemon/pokemonInterface';
import { PokemonService } from './../../core/pokemonService.service';
import { ListarPokemonsService } from './../../core/listarPokemonsService.service';
import { Component, OnInit } from '@angular/core';
import { ListaPokemonsResponseInterface, ResultsListaPokemonsInterface } from 'src/app/model/interface/listaPokemonsResponseInterface';
import { take } from 'rxjs';

@Component({
	selector: 'app-conteudo-pesquisa',
	templateUrl: './conteudo-pesquisa.component.html'
})
export class ConteudoPesquisaComponent implements OnInit {
	public dadosLista!: ListaPokemonsResponseInterface;
	public dadosPokemon: Array<PokemonInterface> = [];
	public loading: boolean = true;

	private offset: number = 0;

	constructor(
		private listarPokemonsService: ListarPokemonsService,
		private pokemonService: PokemonService
	) { }

	ngOnInit() {
		this.getListaPokemon();
	}

	private getListaPokemon(): void {
		this.listarPokemonsService.get(10, this.offset).pipe(take(1)).subscribe({
			next: (res: ListaPokemonsResponseInterface) => {
				this.dadosLista = res;
			},
			complete: () => {
				this.offset += 9
				this.getDadosPokemons();
			}
		})
	}

	private getDadosPokemons(): void {
		this.dadosLista.results.forEach((pokemon: ResultsListaPokemonsInterface) => {
			this.pokemonService.get(pokemon.name).pipe(take(1)).subscribe({
				next: (pok: PokemonInterface) => {
					this.dadosPokemon.push(pok);
				},
				complete: () => {
					if (this.dadosPokemon.length === 9) {
						this.loading = false
					}
				}
			})
		});
	}

	public retornaDadosPokemonHtml(nome: string): PokemonInterface {
		const dados: PokemonInterface = this.dadosPokemon.find(res => res.name === nome)!;
		return dados;
	}
}
