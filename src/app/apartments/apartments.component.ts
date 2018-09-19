import { Component, OnInit, Input } from '@angular/core';
import { ApartmentsService } from './apartments.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
  providers: [ApartmentsService]
})
export class ApartmentsComponent implements OnInit {
	@Input() apartment;
	@Input() imgname;

	apartments = [];
	searchStr = '';

	constructor(private apartmentsService: ApartmentsService) {	}
	ngOnInit() {
		this.apartments = this.apartmentsService.apartments;
	}
}
