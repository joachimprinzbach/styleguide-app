import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TileExampleComponent} from './tile-example.component';
import {RouterModule} from '@angular/router';
import {TileModule} from '../../../components/tile/tile.module';
import {ExampleViewerModule} from '../../../example-viewer/example-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TileExampleComponent}
    ]),
    ExampleViewerModule,
    TileModule
  ],
  declarations: [
    TileExampleComponent
  ]
})
export class TileExampleModule {
}
