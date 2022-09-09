import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErroFiltroComponent } from '../common/erro-filtro/erro-filtro.component';
import { LoadingComponent } from '../common/loading/loading.component';
import { TiposPokemonService } from '../core/tiposPokemonService.service';
import { CapitalizeFirstLetterClass } from '../model/class/capitalizeFirstLetterClass';
import { ChangeBannerClass } from '../model/class/changeBannerClass';
import { TrataImagemPokemonClass } from '../model/class/trataImagemPokemonClass';
import { ConteudoPesquisaComponent } from './conteudo-pesquisa/conteudo-pesquisa.component';
import { DetalhesPokemonModalComponent } from './conteudo-pesquisa/detalhes-pokemon-modal/detalhes-pokemon-modal.component';
import { IndexComponent } from './index.component';
import { ItemsNavComponent } from './navegacao-lateral/items-nav/items-nav.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { SearchComponent } from './search/search.component';

@NgModule({
	declarations: [
		IndexComponent,
		SearchComponent,
		NavegacaoLateralComponent,
		ConteudoPesquisaComponent,
		ItemsNavComponent,
		DetalhesPokemonModalComponent,
		LoadingComponent,
		ErroFiltroComponent
	],
	imports: [
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		BrowserModule,
	],
	providers: [
		ChangeBannerClass,
		TiposPokemonService,
		TrataImagemPokemonClass,
		CapitalizeFirstLetterClass
	],
})
export class IndexModule { }
