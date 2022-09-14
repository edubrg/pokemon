import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexModule } from './index/index.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent
	],
	imports: [
		AppRoutingModule,
		IndexModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
