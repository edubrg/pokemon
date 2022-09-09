import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexModule } from './index/index.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
	],
	imports: [
		AppRoutingModule,
		IndexModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
