import { Injectable } from "@angular/core";
import { PokemonInterface } from "../interface/pokemon/pokemonInterface";

@Injectable()
export class TrataImagemPokemonClass {

	public trataImagens(pokemon: PokemonInterface): string {
		if (pokemon.sprites.other.dream_world.front_default) {
			return pokemon.sprites.other.dream_world.front_default;
		} else if (pokemon.sprites.other['official-artwork'].front_default) {
			return pokemon.sprites.other['official-artwork'].front_default;
		} else {
			return 'assets/pokeball2.png';
		}
	}
}