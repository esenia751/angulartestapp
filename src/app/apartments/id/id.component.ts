import { Component, OnInit, Input } from '@angular/core';
import { ApartmentsService } from '../apartments.service';
import { HoverDirective } from '../apartmentcard/hover.directive';
import { Globals } from '../../globals';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers: [ApartmentsService, HoverDirective]
})
export class IdComponent implements OnInit {

	/*getInfo = [];*/
	apartments = [];
	@Input() apartment;
	/*@Input() imgname;*/

	constructor(private apartmentsService: ApartmentsService) {};
	ngOnInit() {
		this.thestreet = Globals.thestreet;
		this.thehouse = Globals.thehouse;
		this.theimgname = Globals.theimgname;
		this.thefloor = Globals.thefloor;
		this.therooms = Globals.therooms;
		this.thesquare = Globals.thesquare;
	}
	
}
