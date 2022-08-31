import { DadosGeraisPokemon } from './dadosGeraisPokemon';
import { TiposPokemonInterface } from './tiposPokemonInterface';
import { ImagensSpritesPokemonInterface } from './imagensSpritesPokemonInterface';

export interface PokemonInterface extends
	DadosGeraisPokemon, ImagensSpritesPokemonInterface, TiposPokemonInterface { }