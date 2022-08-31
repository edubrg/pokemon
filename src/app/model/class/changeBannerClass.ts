import { Injectable } from "@angular/core";
import { BannerAtualEnum } from "src/app/model/enum/bannerAtualEnum";

@Injectable()
export class ChangeBannerClass {
	constructor() { }

	public change(getElementById: string, bannerAtual: BannerAtualEnum): BannerAtualEnum {
		let bannerHtml = document.getElementById(getElementById);
		if (bannerAtual === BannerAtualEnum.red) {
			bannerHtml?.classList.remove('banner-red');
			bannerHtml?.classList.add('banner-blue');
			return BannerAtualEnum.blue;
		} else {
			bannerHtml?.classList.remove('banner-blue');
			bannerHtml?.classList.add('banner-red');
			return BannerAtualEnum.red;
		}
	}
}