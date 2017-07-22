import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleViewerComponent} from './example-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {ExampleLoaderService} from './example-loader.service';
import {ExampleViewerPageComponent} from './example-viewer.page.component';
import {TabViewModule} from 'primeng/primeng';
import {CodeHighlighterDirective} from './codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		TabViewModule

	],
	exports: [ExampleViewerPageComponent],
	declarations: [ExampleViewerComponent, ExampleViewerPageComponent, CodeHighlighterDirective],
	providers: [ExampleLoaderService]
})
export class ExampleViewerModule {
}
