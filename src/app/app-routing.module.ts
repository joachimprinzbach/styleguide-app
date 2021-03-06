import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{path: '', component: HomeComponent},
			{path: 'tile', loadChildren: './examples/panel/tile/tile-example.module#TileExampleModule'},
			{path: 'button', loadChildren: './examples/button/button-example.module#ButtonExampleModule'},
			{path: 'typography', loadChildren: './examples/typography/typography-example.module#TypographyExampleModule'},
			{path: 'dialog', loadChildren: './examples/overlay/dialog/dialog-example.module#DialogExampleModule'},
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
