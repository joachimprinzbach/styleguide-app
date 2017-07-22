import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ExampleLoaderService} from './example-loader.service';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-example-viewer-page',
	template: `
        <app-example-viewer
                [title]="title"
                [htmlTemplateFileContent]="htmlTemplateFileContent | async"
                [tsFileContent]="tsFileContent | async"
                [sassFileContent]="sassFileContent | async"
        >
            <ng-content></ng-content>
        </app-example-viewer>`
})
export class ExampleViewerPageComponent implements OnInit {

	tsFileContent: Observable<string>;
	htmlTemplateFileContent: Observable<string>;
	sassFileContent: Observable<string>;

	@Input()
	title: string;

	@Input()
	group: string;

	constructor(private exampleLoader: ExampleLoaderService, private cdRef: ChangeDetectorRef) {
	}

	ngOnInit(): void {
		this.tsFileContent = this.exampleLoader.loadTypescriptFile(this.group, this.title);
		this.htmlTemplateFileContent = this.exampleLoader.loadHtmlTemplateFile(this.group, this.title);
		this.sassFileContent = this.exampleLoader.loadSassFile(this.group, this.title);
		this.cdRef.detectChanges();
	}
}
