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

import { AppComponent } from './app.component';

import { SearchBoxComponent } from './widgets/search.component';
import { BrandLabel } from './widgets/brand-label.component';


@NgModule({
	declarations: [
		AppComponent,
		SearchBoxComponent,
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
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
