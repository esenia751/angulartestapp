import { Directive, HostListener, Input } from '@angular/core';
import { ApartmentsService } from '../apartments.service';
import { Globals } from '../../globals';

@Directive({
	selector: '[cardHover]',
	providers: [ApartmentsService]
})
export class HoverDirective {
	/*getInfo = [];*/
	apartments = [];

	@Input() apartment;
	@Input() imgname;

	constructor(private apartmentsService: ApartmentsService) {	}
	ngOnInit() {
		this.apartments = this.apartmentsService.apartments;
	}

	@HostListener('mouseenter')	onMouseEnter() {
		this.getInfo = this.apartment;
		Globals.thestreet = this.getInfo.street;
		Globals.thehouse = this.getInfo.house;
		Globals.theimgname = this.getInfo.imgname;
		Globals.thefloor = this.getInfo.floor;
		Globals.therooms = this.getInfo.rooms;
		Globals.thesquare = this.getInfo.square;
		console.log(Globals.thestreet);
	}
}