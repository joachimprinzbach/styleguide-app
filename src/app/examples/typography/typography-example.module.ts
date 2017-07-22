import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExampleViewerModule} from '../../example-viewer/example-viewer.module';
import {TypographyExampleComponent} from './typography-example.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: TypographyExampleComponent}
		]),
		ExampleViewerModule
	],
	declarations: [
		TypographyExampleComponent
	]
})
export class TypographyExampleModule {
}
