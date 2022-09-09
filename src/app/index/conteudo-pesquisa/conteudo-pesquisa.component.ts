import { CapitalizeFirstLetterClass } from './../../model/class/capitalizeFirstLetterClass';
import { TrataImagemPokemonClass } from './../../model/class/trataImagemPokemonClass';
import { FiltrosService } from './../../core/filtros.service';
import { PokemonInterface } from './../../model/interface/pokemon/pokemonInterface';
import { PokemonService } from './../../core/pokemonService.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ListaPokemonsResponseInterface, PokemonListaPokemonsInterface, ResultsListaPokemonsInterface } from 'src/app/model/interface/listaPokemonsResponseInterface';
import { Subscription, take } from 'rxjs';
import { TiposPokemonService } from 'src/app/core/tiposPokemonService.service';

@Component({
	selector: 'app-conteudo-pesquisa',
	templateUrl: './conteudo-pesquisa.component.html'
})
export class ConteudoPesquisaComponent implements OnInit, OnDestroy {
	@Output() filtroNomeOuIdAtivado = new EventEmitter<boolean>();

	public dadosLista!: ListaPokemonsResponseInterface;
	public dadosPokemon: Array<PokemonInterface> = [];
	public dadosTela: PokemonInterface[] = [];
	public pokemonSelecionadoModal!: PokemonInterface;
	public loading: boolean = false;

	private offset: number = 9;
	private unsubscribers: Subscription[] = [];

	constructor(
		private pokemonService: PokemonService,
		private filtrosService: FiltrosService,
		private tiposPokemonService: TiposPokemonService,
		public trataImagemPokemonClass: TrataImagemPokemonClass,
		public capitalizeFirstLetterClass: CapitalizeFirstLetterClass
	) { }

	ngOnInit() {
		this.getListaPokemon();
		this.getFiltrarTipoPokemon();
		this.getNomeOuIdPokemonSearch();
	}

	ngOnDestroy(): void {
		this.unsubscribers.forEach(subs => subs.unsubscribe);
	}

	private getListaPokemon(): void {
		this.loading = true;
		this.pokemonService.getListaPokemon(9, this.offset).pipe(take(1)).subscribe({
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
			this.insereIdResultsListaPokemonInterface(pokemon);
			this.pokemonService.getPokemon(pokemon.id > 0 ? pokemon.id.toString() : pokemon.name).pipe(take(1)).subscribe({
				next: (pok: PokemonInterface) => {
					this.dadosPokemon.push(pok);
				},
				error: () => {
					this.dadosLista.count = 0;
					this.loading = false;
				},
				complete: () => {
					if (this.dadosLista.results.length === index + 1) {
						this.loading = false;
					}
				}
			})
		});
	}

	private insereIdResultsListaPokemonInterface(pokemon: ResultsListaPokemonsInterface): void {
		if (!pokemon.hasOwnProperty('id')) {
			const urlSplit = pokemon.url.split('/');
			pokemon.id = Number(urlSplit[urlSplit.length - 2]);
		}
	}

	private getFiltrarTipoPokemon(): void {
		this.unsubscribers.push(this.filtrosService.getFiltroTipo().subscribe({
			next: (tipo: string) => {
				this.dadosPokemon = [];
				this.loading = true;
				this.verificaTipoDoFiltro(tipo);
			}
		}));
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

	private async trataDadosTipoPokemonLista(): Promise<void> {
		this.dadosLista.results = [];
		this.dadosLista.results = await Promise.all(this.dadosLista.pokemon?.map((res: PokemonListaPokemonsInterface) => {
			return res.pokemon;
		}));
		this.getDadosPokemons();
	}

	private getNomeOuIdPokemonSearch(): void {
		this.unsubscribers.push(this.filtrosService.getFiltroNomeOuIdPokemon().subscribe({
			next: (nomeOuId: string) => {
				if (nomeOuId) {
					this.filtroNomeOuIdAtivado.emit(true);
					this.trataDadosNomeOuIdPokemonSearch(nomeOuId);
				}
			}
		}));
	}

	private trataDadosNomeOuIdPokemonSearch(nomeOuId: string): void {
		if (nomeOuId && nomeOuId !== '') {
			this.loading = true;
			this.dadosPokemon = [];
			this.dadosLista.results = [];
			const nomesPokemon = nomeOuId.split(/[ ,]+/);
			nomesPokemon.forEach((nome: string) => {
				this.dadosLista.results.push(
					{
						id: 0,
						name: nome.toLowerCase(),
						url: '',
					}
				)
				this.dadosLista.count = nomesPokemon.length
			});
			this.getDadosPokemons();
		} else {
			this.getListaPokemon();
		}

	}

	public retornaDadosPokemonHtml(nome: string): void {
		const dados: PokemonInterface = this.dadosPokemon.find((res) => res.name === nome)!;
		this.dadosTela.push(dados);
	}

	public trataImagens(pokemon: PokemonInterface): string {
		if (pokemon.sprites.other.dream_world.front_default) {
			return pokemon.sprites.other.dream_world.front_default;
		} else if (pokemon.sprites.other['official-artwork'].front_default) {
			return pokemon.sprites.other['official-artwork'].front_default;
		} else {
			return 'assets/pokeball2.png';
		}
	}

	public abrirModal(dadosPokemon: PokemonInterface): void {
		this.pokemonSelecionadoModal = dadosPokemon;
	}

	public erroFiltroRecarregar(event: boolean) {
		event && this.getListaPokemon();
		this.filtrosService.setFiltroNomeOuIdPokemon(undefined!);
	}
}
