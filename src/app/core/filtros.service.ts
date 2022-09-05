import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FiltrosService {

	private filtros = new BehaviorSubject<string>(undefined!);

	public getFiltros(): Observable<string>{
		return this.filtros.asObservable();
	}

	public setFiltros(value: string): void {
		this.filtros.next(value);
	}
}
