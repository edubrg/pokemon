import { FiltrosService } from './../../../core/filtros.service';
import { Component, Input } from '@angular/core';
import { ListaPokemonsResponseInterface } from 'src/app/model/interface/listaPokemonsResponseInterface';

@Component({
	selector: 'app-items-nav',
	templateUrl: './items-nav.component.html'
})
export class ItemsNavComponent {
	public selecionado: number = -1;
	@Input() filtroInputAtivado: boolean = false;
	@Input() public dados!: ListaPokemonsResponseInterface;

	constructor(private filtrosService: FiltrosService) { }

	public filtrarTipoPokemon(value: string, index: number): void {
		console.log(this.filtroInputAtivado);
		this.filtroInputAtivado = false;
		this.filtrosService.setFiltroTipo(value);
		this.selecionado = index;
	}
}
