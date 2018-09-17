import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from './apartments.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: [ApartmentsService]
})
export class ApartmentsComponent implements OnInit {

	apartments = [];
	searchStr = '';
	
	constructor(private apartmentsService: ApartmentsService) {};
	ngOnInit() {
		this.apartments = this.apartmentsService.apartments
	}

}
