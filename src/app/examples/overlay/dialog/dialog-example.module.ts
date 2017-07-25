import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExampleViewerModule} from '../../../example-viewer/example-viewer.module';
import {DialogExampleComponent} from './dialog-example.component';
import {DialogModule} from 'primeng/primeng';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: DialogExampleComponent}
		]),
		ExampleViewerModule,
		DialogModule
	],
	declarations: [
		DialogExampleComponent
	]
})
export class DialogExampleModule {
}
