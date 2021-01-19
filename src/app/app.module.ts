import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgAisModule } from 'angular-instantsearch';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { SearchBoxComponent } from './widgets/search.component';
import { CategoryLabel } from './widgets/category-label.component';
import { BrandLabel } from './widgets/brand-label.component';


@NgModule({
	declarations: [
		AppComponent,
		SearchBoxComponent,
		CategoryLabel,
		BrandLabel,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgAisModule,
		MatToolbarModule,
		MatSidenavModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
