import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'Algozon';
	mobileQuery: MediaQueryList;

	constructor(media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
	}

	// Public ecommerce Dataset configured by Algolia's team
	// config = {
	//	 apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
	//	 appId: 'latency',
	//	 indexName: 'instant_search',
	//	 routing: true,
	// };

	// Personal Dataset. apiKey is only usable for Search
	config = {
		apiKey: 'c93c9c1cd411d4b08f2f95ecc6c150ac',
		appId: 'S0QWXUZ3HE',
		indexName: 'prod_ALGOZON',
		routing: true,
	};
}
