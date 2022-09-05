import { FiltrosService } from './../../core/filtros.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	form: FormGroup = this.criaFormulario();

	constructor(
		private fb: FormBuilder,
		private filtrosService: FiltrosService
	) { }

	private criaFormulario(): FormGroup {
		return this.fb.group({
			pesquisa: null
		})
	}

	public pesquisar(): void {
		if(this.form.get('pesquisa')?.value){
			this.filtrosService.setFiltroPokemon(this.form.get('pesquisa')?.value);
		}
	}
}
