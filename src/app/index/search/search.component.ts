import { FiltrosService } from './../../core/filtros.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
			pesquisa: [null, Validators.required]
		})
	}

	public pesquisar(): void {
		if(this.form.get('pesquisa')?.value){
			this.filtrosService.setFiltroNomeOuIdPokemon(this.form.get('pesquisa')?.value);
		}
	}

	public clickInformacaoAdicional(): void {
		this.form.patchValue({
			pesquisa: 'Pikachu, Charizard, 18'
		})
	}
}
