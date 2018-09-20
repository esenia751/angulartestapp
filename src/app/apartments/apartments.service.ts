import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apartment } from './apartment';
import { APARTMENTS } from './apartmentsdata'

@Injectable({
  providedIn: 'root',
})

export class ApartmentsService {
	constructor(private apartmentsService: ApartmentsService) {}

  getApartments(): Observable<Apartment[]> {
  	return of(APARTMENTS);
  }

  getApartment(id: number): Observable<Apartment> {
  	return of(APARTMENTS.find(apartment => apartment.id === id));
  }
}