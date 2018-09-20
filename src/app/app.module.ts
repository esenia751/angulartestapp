import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentcardComponent } from './apartments/apartmentcard/apartmentcard.component';
import { IdComponent } from './apartments/id/id.component';

const routes = [
  { path: '', component: HomePageComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:id', component: IdComponent },
  { path: '**', component: HomePageComponent }  /* redirect to home if the page doesn't exist */
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApartmentsComponent,
    ApartmentcardComponent,
    IdComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
