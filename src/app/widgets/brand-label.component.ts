import { Component, Inject, forwardRef, Input } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectRefinementList } from 'instantsearch.js/es/connectors';

@Component({
	selector: 'app-brand-label',
	templateUrl: './brand-label.component.html',
	styleUrls: ['./brand-label.component.scss'],
})
export class BrandLabel extends BaseWidget {
	@Input() attribute: string;
	public state: {
		items: object[];
	};
	constructor(
		@Inject(forwardRef(() => NgAisInstantSearch))
		public instantSearchParent
	) {
		super('RefinementList');
	}
	ngOnInit() {
		this.createWidget(connectRefinementList, {
			// instance options
			attributeName: this.attribute,
		});
		super.ngOnInit();
	}
}
