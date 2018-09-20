import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApartmentsService } from '../apartments.service';
import { Apartment } from '../apartment'

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers: []
})
export class IdComponent implements OnInit {

	apartment: Apartment;

	constructor(
		private route: ActivatedRoute,
		private apartmentsService: ApartmentsService,
		private location: Location
	) {};

	ngOnInit() {
		this.getApartment();
	}

	getApartment(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.apartmentsService.getApartment(id).subscribe(apartment => this.apartment = apartment);
	}
	
}
