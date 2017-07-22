import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TileExampleComponent} from './tile-example.component';
import {RouterModule} from '@angular/router';
import {TileComponent} from '../../../components/tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TileExampleComponent}
    ]),
    TileComponent
  ],
  declarations: [
    TileExampleComponent
  ]
})
export class TileExampleModule {
}
