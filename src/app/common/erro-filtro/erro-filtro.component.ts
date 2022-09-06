import { FiltrosService } from './../../core/filtros.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-erro-filtro',
	templateUrl: './erro-filtro.component.html'
})
export class ErroFiltroComponent {
	@Output() recarregar = new EventEmitter<boolean>();

	public recarregarFiltro(): void {
		this.recarregar.emit(true)
	}
}
