import { Component } from '@angular/core';
import { ApartmentsService } from './apartments/apartments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
 	title = 'База недвижимости';

	apartments = [];
	searchStr = '';
}
