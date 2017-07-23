import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ButtonExampleComponent} from './button-example.component';
import {ExampleViewerModule} from '../../example-viewer/example-viewer.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: ButtonExampleComponent}
		]),
		ExampleViewerModule
	],
	declarations: [
		ButtonExampleComponent
	]
})
export class ButtonExampleModule {
}
