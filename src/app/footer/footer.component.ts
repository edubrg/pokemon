import { Component, OnInit } from '@angular/core';
import { BannerAtualEnum } from '../model/enum/bannerAtualEnum';
import { ChangeBannerClass } from '../model/class/changeBannerClass';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	private bannerAtual: BannerAtualEnum = BannerAtualEnum.red;

	constructor(
		private changeBanner: ChangeBannerClass
		) { }

	ngOnInit() {
		setInterval(() => (this.bannerAtual = this.changeBanner.change('footer', this.bannerAtual)), 5000)
	}
}
