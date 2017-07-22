import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleViewerComponent} from './example-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {ExampleLoaderService} from './example-loader.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ExampleViewerComponent],
  declarations: [ExampleViewerComponent],
  providers: [ExampleLoaderService]
})
export class ExampleViewerModule {
}
