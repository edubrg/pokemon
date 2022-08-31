import { TiposPokemonService } from './../../core/tiposPokemonService.service';
import { Component, OnInit } from '@angular/core';
import { TiposPokemonResponseInterface } from 'src/app/model/interface/tiposPokemonResponse';
import { LabelsInterface } from 'src/app/language/labelsInterface';
import Labels from '../../language/pt-br/labels.json';

@Component({
	selector: 'app-navegacao-lateral',
	templateUrl: './navegacao-lateral.component.html',
})
export class NavegacaoLateralComponent implements OnInit {
	public labelsInterface: LabelsInterface = Labels
	public tiposPokemon!: TiposPokemonResponseInterface;
	constructor(private tiposPokemonService: TiposPokemonService) { }

	ngOnInit() {
		this.getTipoPokemon();
	}

	private getTipoPokemon(): void {
		this.tiposPokemonService.getTiposPokemon().subscribe({
			next: (res: TiposPokemonResponseInterface) => {
				this.tiposPokemon = this.trataDados(res);
			},
			error: () => {
				this.tiposPokemon = undefined!;
			}
		})
	}

	private trataDados(result: TiposPokemonResponseInterface): TiposPokemonResponseInterface {
		result.results.map((dados, index) => {
			dados.urlImg = `assets/tipos-pokemon-icon/${dados.name}.svg`
			if (dados.name === 'unknown') {
				result.results.splice(index);
			}
		})
		return result;
	}
}
