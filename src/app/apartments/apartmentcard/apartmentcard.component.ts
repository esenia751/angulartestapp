import { Component, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-apartmentcard',
  templateUrl: './apartmentcard.component.html',
  styleUrls: ['./apartmentcard.component.css'],
  providers: []
})

export class ApartmentcardComponent {
	@Input() apartment: Apartment;
	/*@Input() imgname;*/
	constructor() {}
}