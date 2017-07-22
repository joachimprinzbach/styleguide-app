import {Component, Input, OnInit} from '@angular/core';
import {ExampleLoaderService} from './example-loader.service';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent implements OnInit {

  showSource = false;
  @Input()
  title: string;

  constructor(private exampleLoader: ExampleLoaderService) {
  }

  ngOnInit(): void {
    this.exampleLoader.loadExampleFile('tile')
      .subscribe(content => {
        console.log('Contains: ' + content);
      });
  }

  toggleSourceView() {
    this.showSource = !this.showSource;
  }
}
