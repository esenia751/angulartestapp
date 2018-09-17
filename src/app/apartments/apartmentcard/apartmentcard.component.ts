/*import { Component, OnInit } from '@angular/core';*/
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apartmentcard',
  templateUrl: './apartmentcard.component.html',
  styleUrls: ['./apartmentcard.component.css']
})

export class ApartmentcardComponent {
	@Input() apartment;
	@Input() imgname;
	constructor() {}
}