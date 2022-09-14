import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeBannerClass } from '../model/class/changeBannerClass';
import { BannerAtualEnum } from '../model/enum/bannerAtualEnum';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
	private bannerAtual: BannerAtualEnum = BannerAtualEnum.red;
	private footerColor: BannerAtualEnum = BannerAtualEnum.red;
	private setInterval: ReturnType<typeof setInterval> = undefined!;
	public filtroNomeOuId: boolean = false;

	constructor(
		private changeBanner: ChangeBannerClass
	) { }

	ngOnInit(): void {
		this.mudarCorBanner();
		this.definirClassIndexHeader();
	}

	ngOnDestroy(): void {
		clearInterval(this.setInterval);
		this.removerClassIndexHeader();
	}

	private mudarCorBanner(): void {
		this.setInterval = setInterval(() => {
			this.bannerAtual = this.changeBanner.change('banner', this.bannerAtual);
			this.footerColor = this.changeBanner.change('footer', this.footerColor);
		}, 5000);
	}

	private definirClassIndexHeader(): void {
		document.getElementById('cabecalho')?.classList.add('index');
	}

	private removerClassIndexHeader(): void {
		document.getElementById('cabecalho')?.classList.remove('index');
	}

	public filtroNomeOuIdAtivado(event: boolean): void {
		this.filtroNomeOuId = event;
	}
}
