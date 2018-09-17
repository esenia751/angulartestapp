import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})


export class SearchPipe implements PipeTransform {
	transform(apartments, value) {
		return apartments.filter(apartment => {
			return apartment.street.includes(value);
		})
	}
	
}

/*
export class SearchPipe implements PipeTransform {
	transform(apartments, searchStr) {
		return apartments.filter(apartment => {
			return apartment.street.includes(searchStr)
		})
	}
	
}*/