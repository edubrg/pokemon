import { FiltrosService } from './../../core/filtros.service';
import { PokemonInterface } from './../../model/interface/pokemon/pokemonInterface';
import { PokemonService } from './../../core/pokemonService.service';
import { ListarPokemonsService } from './../../core/listarPokemonsService.service';
import { Component, OnInit } from '@angular/core';
import { ListaPokemonsResponseInterface, PokemonListaPokemonsInterface, ResultsListaPokemonsInterface } from 'src/app/model/interface/listaPokemonsResponseInterface';
import { take } from 'rxjs';
import { TiposPokemonService } from 'src/app/core/tiposPokemonService.service';

@Component({
	selector: 'app-conteudo-pesquisa',
	templateUrl: './conteudo-pesquisa.component.html'
})
export class ConteudoPesquisaComponent implements OnInit {
	public dadosLista!: ListaPokemonsResponseInterface;
	public dadosPokemon: Array<PokemonInterface> = [];
	public dadosTela: PokemonInterface[] = [];
	public loading: boolean = false;

	private offset: number = 0;

	constructor(
		private listarPokemonsService: ListarPokemonsService,
		private pokemonService: PokemonService,
		private filtrosService: FiltrosService,
		private tiposPokemonService: TiposPokemonService
	) { }

	ngOnInit() {
		this.getListaPokemon();
		this.getFiltrar();
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
		this.dadosLista.results.forEach((pokemon: ResultsListaPokemonsInterface, index: number) => {
			this.pokemonService.get(pokemon.name).pipe(take(1)).subscribe({
				next: (pok: PokemonInterface) => {
					this.dadosPokemon.push(pok);
				},
				complete: () => {
					if (this.dadosLista.results.length === index + 1) {
						this.loading = false;
						console.log(this.dadosPokemon);

					}
				}
			})
		});
	}

	private getFiltrar(): void {
		this.filtrosService.getFiltros().subscribe({
			next: (tipo: string) => {
				this.dadosPokemon = [];
				this.loading = true;
				this.verificaTipoDoFiltro(tipo);
			}
		})
	}

	private verificaTipoDoFiltro(tipo: string): void {
		switch (tipo) {
			case 'all':
				this.getListaPokemon();
				break;
			case undefined:
				break;
			default:
				this.getTipoPokemon(tipo);
				break;
		}
	}

	private getTipoPokemon(tipo: string): void {
		this.tiposPokemonService.getTiposPokemon(tipo).subscribe({
			next: (res: ListaPokemonsResponseInterface) => {
				this.dadosLista = res;
				this.trataDadosTipoPokemonLista();
			}
		});
	}

	async trataDadosTipoPokemonLista(): Promise<any> {
		this.dadosLista.results = [];
		this.dadosLista.results = await Promise.all(this.dadosLista.pokemon?.map((res: PokemonListaPokemonsInterface) => {
			return res.pokemon;
		}));
		this.getDadosPokemons();
	}

	public retornaDadosPokemonHtml(nome: string): void {
		const dados: PokemonInterface = this.dadosPokemon.find((res) => res.name === nome)!;
		this.dadosTela.push(dados);
	}

	public trataImagens(pokemon: PokemonInterface): string {
		if(pokemon.sprites.other.dream_world.front_default) {
			return pokemon.sprites.other.dream_world.front_default;
		}else if(pokemon.sprites.other['official-artwork'].front_default){
			return pokemon.sprites.other['official-artwork'].front_default;
		}else {
			return 'assets/pokeball2.png';
		}
	}
}
