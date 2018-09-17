import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../apartments/apartments.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ApartmentsService]
})

export class HomePageComponent implements OnInit {
	constructor(private apartmentsService: ApartmentsService) {}
	ngOnInit() {
		this.apartments = this.apartmentsService.apartments
	}

	apartments = [];
	searchStr = '';
}