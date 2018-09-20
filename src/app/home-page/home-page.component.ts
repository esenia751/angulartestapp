import { Component, OnInit } from '@angular/core';
/*import { ApartmentsService } from '../apartments/apartments.service';*/
import { APARTMENTS } from '../apartments/apartmentsdata';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: []
})

export class HomePageComponent implements OnInit {
	/*apartments = APARTMENTS;*/

	/*constructor(private apartmentsService: ApartmentsService) {}*/
	constructor() {}
	ngOnInit() {
		/*this.apartments = this.apartmentsService.apartments*/
	}

	counter: number = Object.keys(APARTMENTS).length;
}