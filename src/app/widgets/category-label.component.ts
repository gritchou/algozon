import { Component, Inject, forwardRef, Input } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectHierarchicalMenu } from 'instantsearch.js/es/connectors';

@Component({
	selector: 'app-category-label',
	templateUrl: './category-label.component.html',
	styleUrls: ['./category-label.component.scss'],
})
export class CategoryLabel extends BaseWidget {
	@Input() attributes: string[];
	public state: {
		items: object[];
	};
	constructor(
		@Inject(forwardRef(() => NgAisInstantSearch))
		public instantSearchParent
	) {
		super('HierarchicalMenu');
	}
	ngOnInit() {
		this.createWidget(connectHierarchicalMenu, {
			// instance options
			attributes: this.attributes,
		});
		super.ngOnInit();
	}
}
