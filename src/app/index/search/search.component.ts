import { FiltrosService } from './../../core/filtros.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
	public form: FormGroup = this.criaFormulario();
	private unsubscribe!: Subscription;

	constructor(
		private fb: FormBuilder,
		private filtrosService: FiltrosService
	) { }

	ngOnInit(): void {
		this.erroPesquisa();
	}

	ngOnDestroy(): void {
		this.unsubscribe.unsubscribe();
	}

	private criaFormulario(): FormGroup {
		return this.fb.group({
			pesquisa: [null, Validators.required]
		})
	}

	private erroPesquisa(): void {
		this.unsubscribe = this.filtrosService.getFiltroNomeOuIdPokemon().subscribe({
			next: (value: string) => {
				!value && this.form.reset()
			}
		})
	}

	public pesquisar(): void {
		this.filtrosService.setFiltroNomeOuIdPokemon(this.form.get('pesquisa')?.value);
	}

	public clickInformacaoAdicional(): void {
		this.form.patchValue({
			pesquisa: 'Pikachu, Charizard, 18'
		})
	}
}
