import { Injectable } from "@angular/core";

@Injectable()
export class CapitalizeFirstLetterClass {

	public capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
}