import { Component, OnInit } from '@angular/core';
import { ChangeBannerClass } from '../model/class/changeBannerClass';
import { BannerAtualEnum } from '../model/enum/bannerAtualEnum';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
	private bannerAtual: BannerAtualEnum = BannerAtualEnum.red;
	public filtroNomeOuId: boolean = false;

	constructor(
		private changeBanner: ChangeBannerClass
	) { }

	ngOnInit() {
		setInterval(() => (this.bannerAtual = this.changeBanner.change('banner', this.bannerAtual)), 5000)
	}

	public filtroNomeOuIdAtivado(event: boolean): void {
		this.filtroNomeOuId = event;
	}
}
