import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConteudoPesquisaComponent } from './index/conteudo-pesquisa/conteudo-pesquisa.component';
import { IndexComponent } from './index/index.component';
import { ItemsNavComponent } from './index/navegacao-lateral/items-nav/items-nav.component';
import { NavegacaoLateralComponent } from './index/navegacao-lateral/navegacao-lateral.component';
import { SearchComponent } from './index/search/search.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { FooterComponent } from './footer/footer.component';
import { ChangeBannerClass } from './model/class/changeBannerClass';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './common/loading/loading.component';
import { TiposPokemonService } from './core/tiposPokemonService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		MenuPrincipalComponent,
		SearchComponent,
		NavegacaoLateralComponent,
		ConteudoPesquisaComponent,
		ItemsNavComponent,
		FooterComponent,
		LoadingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [
		ChangeBannerClass,
		TiposPokemonService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }