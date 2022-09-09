import { DadosGeraisPokemon } from './dadosGeraisPokemon';
import { TiposPokemonInterface } from './tiposPokemonInterface';
import { ImagensSpritesPokemonInterface } from './imagensSpritesPokemonInterface';
import { StatusPowerInterface } from './statusPowerInterface';
import { HabilidadesInterface } from './habilidadesInterface';

export interface PokemonInterface extends
	DadosGeraisPokemon, ImagensSpritesPokemonInterface, TiposPokemonInterface, StatusPowerInterface, HabilidadesInterface { }