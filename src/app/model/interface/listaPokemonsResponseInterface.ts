export interface ListaPokemonsResponseInterface extends RelacaoDeDano {
	count: number,
	next: string,
	previous: string,
	results: Array<ResultsListaPokemonsInterface>
	pokemon: Array<PokemonListaPokemonsInterface>
}

export interface ResultsListaPokemonsInterface extends NomeUrl {
	id: number
	urlImg?: string
}
export interface PokemonListaPokemonsInterface {
	pokemon: ResultsListaPokemonsInterface,
	slot: number
}

export interface RelacaoDeDano {
	damage_relations: {
		double_damage_from: Array<NomeUrl>,
		double_damage_to: Array<NomeUrl>,
		half_damage_from: Array<NomeUrl>,
		half_damage_to: Array<NomeUrl>,
		no_damage_from: [],
		no_damage_to: []
	}
}

interface NomeUrl {
	name: string,
	namePtbr?: string,
	url: string
}