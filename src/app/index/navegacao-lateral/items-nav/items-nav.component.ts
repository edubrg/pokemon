import { ItensNavegacaoLateralInterface } from './../../model/interface/itensNavegacaoLateralInterface';
import { Component, Input, OnInit } from '@angular/core';
import { TiposPokemonResponseInterface } from 'src/app/model/interface/tiposPokemonResponse';

@Component({
	selector: 'app-items-nav',
	templateUrl: './items-nav.component.html'
})
export class ItemsNavComponent implements OnInit {
	@Input() public dados!: TiposPokemonResponseInterface;

	constructor() { }

	ngOnInit() {
	}
}
