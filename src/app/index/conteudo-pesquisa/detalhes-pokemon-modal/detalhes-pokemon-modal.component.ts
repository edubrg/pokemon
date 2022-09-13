import { ListaPokemonsResponseInterface, RelacaoDeDano } from 'src/app/model/interface/listaPokemonsResponseInterface';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CapitalizeFirstLetterClass } from './../../../model/class/capitalizeFirstLetterClass';
import { TrataImagemPokemonClass } from './../../../model/class/trataImagemPokemonClass';
import { TiposPokemonService } from './../../../core/tiposPokemonService.service';
import { PokemonInterface } from './../../../model/interface/pokemon/pokemonInterface';
import { LabelsInterface } from 'src/app/language/labelsInterface';
import Labels from '../../../language/pt-br/labels.json';


@Component({
	selector: 'app-detalhes-pokemon-modal',
	templateUrl: './detalhes-pokemon-modal.component.html'
})
export class DetalhesPokemonModalComponent implements OnChanges {
	@Input() dadosPokemon!: PokemonInterface;
	public fraquezaStatus!: RelacaoDeDano;

	private labelsInterface: LabelsInterface = Labels

	constructor(
		public trataImagemPokemonClass: TrataImagemPokemonClass,
		public capitalizeFirstLetterClass: CapitalizeFirstLetterClass,
		private TiposPokemonService: TiposPokemonService
	) { }

	ngOnChanges(changes: SimpleChanges): void {
		if (!changes['dadosPokemon'].firstChange) {
			const tipoId = this.dadosPokemon.types[0].type.url.split('/');
			this.clickModal(Number(tipoId[tipoId.length - 2]));
		}
	}

	private clickModal(pokemonId: number): void {
		this.TiposPokemonService.getTiposPokemon(pokemonId.toString()).subscribe({
			next: (value: ListaPokemonsResponseInterface) => {
				this.fraquezaStatus = value
			},
			complete: () => {
				this.traduz();
			}
		});
	}

	private traduz(): void {
		this.dadosPokemon.stats.forEach((res) => {
			(Object.keys(this.labelsInterface.statsPokemon) as (keyof typeof this.labelsInterface.statsPokemon)[]).forEach((key) => {
				if (key === res.stat.name) {
					res.stat.name = this.labelsInterface.statsPokemon[key]
				}
			});
		});

		this.dadosPokemon.types.forEach((res) => {
			(Object.keys(this.labelsInterface.typePokemon) as (keyof typeof this.labelsInterface.typePokemon)[]).forEach((key) => {
				if (key === res.type.name) {
					res.type.namePtbr = this.labelsInterface.typePokemon[key]
				}
			});
		});

		this.fraquezaStatus.damage_relations.double_damage_from.forEach((res) => {
			(Object.keys(this.labelsInterface.typePokemon) as (keyof typeof this.labelsInterface.typePokemon)[]).forEach((key) => {
				if (key === res.name) {
					res.namePtbr = this.labelsInterface.typePokemon[key]
				}
			});
		});
	}

	public dadosStatusBar(status: number): string {
		return (status > 100 ? 100 : status) + '%';
	}

	public fecharModal(): void {
		document.getElementsByTagName("html")[0].style.overflowY = 'scroll';
		this.dadosPokemon = undefined!
	}
}
