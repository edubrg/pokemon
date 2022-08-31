export interface ListaPokemonsResponseInterface {
	count: number,
	next: string,
	previous: string,
	results: Array<ResultsListaPokemonsInterface>
}

export interface ResultsListaPokemonsInterface {
	name: string,
	url: string
}