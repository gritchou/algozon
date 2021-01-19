import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgAisModule } from 'angular-instantsearch';
import { SearchBoxComponent } from './widgets/search.component';
import { CategoryLabel } from './widgets/category-label.component';


describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				SearchBoxComponent,
				CategoryLabel,
			],
			imports: [
				BrowserAnimationsModule,
				MatToolbarModule,
				MatSidenavModule,
				MatInputModule,
				MatFormFieldModule,
				MatButtonModule,
				MatIconModule,
				NgAisModule,
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Algozon'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Algozon');
	});
});
