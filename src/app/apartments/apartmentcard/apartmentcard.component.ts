/*import { Component, OnInit } from '@angular/core';*/
import { Component, Input } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-apartmentcard',
  templateUrl: './apartmentcard.component.html',
  styleUrls: ['./apartmentcard.component.css'],
  providers: []
})

export class ApartmentcardComponent {
	@Input() apartment;
	@Input() imgname;
	constructor() {}
}