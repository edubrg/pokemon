import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeBannerClass } from './model/class/changeBannerClass';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './common/loading/loading.component';
import { TiposPokemonService } from './core/tiposPokemonService.service';
import { ErroFiltroComponent } from './common/erro-filtro/erro-filtro.component';
import { IndexModule } from './index/index.module';

@NgModule({
	declarations: [
		AppComponent,
		MenuPrincipalComponent,
		FooterComponent,
	],
	imports: [
		AppRoutingModule,
		IndexModule
	],
	providers: [
		
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
