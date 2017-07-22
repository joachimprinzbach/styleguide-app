import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent {

  showSource = false;
  @Input()
  title: string;
	@Input()
	tsFileContent: string;
	@Input()
	htmlTemplateFileContent: string;
	@Input()
	sassFileContent: string;

  toggleSourceView() {
    this.showSource = !this.showSource;
  }
}
