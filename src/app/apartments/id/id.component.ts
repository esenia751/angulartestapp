import { Component, OnInit, Input } from '@angular/core';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
  providers: [ApartmentsService]
})
export class IdComponent implements OnInit {
	
	apartments = [];
	
	@Input() apartment;
	@Input() imgname;

	constructor(private apartmentsService: ApartmentsService) {};
	ngOnInit() {
		this.apartments = this.apartmentsService.apartments
	}
}
