import { Component, OnInit, Input } from '@angular/core';
import { ApartmentsService } from './apartments.service';
import { APARTMENTS } from './apartmentsdata';
import { Apartment } from './apartment'

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: []
})
export class ApartmentsComponent implements OnInit {
	/*@Input() apartment;
	@Input() imgname;*/

	apartments: Apartment[] = [];
	searchStr = '';

	constructor(private apartmentsService: ApartmentsService) {	}

	ngOnInit() {
		this.getApartments();
	}

	getApartments(): void {
    this.apartmentsService.getApartments()
      .subscribe(apartments => this.apartments = apartments);
  }
}
