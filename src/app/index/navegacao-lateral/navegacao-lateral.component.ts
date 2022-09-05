import { TiposPokemonService } from './../../core/tiposPokemonService.service';
import { Component, OnInit } from '@angular/core';
import { LabelsInterface } from 'src/app/language/labelsInterface';
import Labels from '../../language/pt-br/labels.json';
import { ListaPokemonsResponseInterface } from 'src/app/model/interface/listaPokemonsResponseInterface';

@Component({
	selector: 'app-navegacao-lateral',
	templateUrl: './navegacao-lateral.component.html',
})
export class NavegacaoLateralComponent implements OnInit {
	public labelsInterface: LabelsInterface = Labels
	public tiposPokemon!: ListaPokemonsResponseInterface;
	constructor(private tiposPokemonService: TiposPokemonService) { }

	ngOnInit() {
		this.getTipoPokemon();
	}

	private getTipoPokemon(): void {
		this.tiposPokemonService.getTiposPokemon().subscribe({
			next: (res: ListaPokemonsResponseInterface) => {
				this.tiposPokemon = this.trataDados(res);
			},
			error: () => {
				this.tiposPokemon = undefined!;
			}
		})
	}

	private trataDados(result: ListaPokemonsResponseInterface): ListaPokemonsResponseInterface {
		result.results.forEach((dados, index) => {
			dados.urlImg = `assets/tipos-pokemon-icon/${dados.name}.svg`
			if (dados.name === 'unknown') {
				result.results.splice(index);
			}

			(Object.keys(this.labelsInterface.typePokemon) as (keyof typeof this.labelsInterface.typePokemon)[]).forEach((key) => {
					if(key === dados.name) {
						dados.namePtbr = this.labelsInterface.typePokemon[key]
					}
			});
		})
		return result;
	}
}
