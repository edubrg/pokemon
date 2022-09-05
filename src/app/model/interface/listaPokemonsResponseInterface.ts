export interface ListaPokemonsResponseInterface {
	count: number,
	next: string,
	previous: string,
	results: Array<ResultsListaPokemonsInterface>
	pokemon: Array<PokemonListaPokemonsInterface>
}

export interface ResultsListaPokemonsInterface {
	name: string,
	namePtbr?: string,
	url: string,
	urlImg?: string
}
export interface PokemonListaPokemonsInterface {
	pokemon: {
		name: string,
		namePtbr?: string,
		url: string,
		urlImg?: string
	},
	slot: number
}