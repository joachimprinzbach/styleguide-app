import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExampleLoaderService {

  constructor(private http: HttpClient) {
  }

	loadTypescriptFile(groupName: string, exampleName: string): Observable<any> {
		return this.loadExampleFile(groupName, exampleName, 'ts');
	}

	loadHtmlTemplateFile(groupName: string, exampleName: string): Observable<any> {
		return this.loadExampleFile(groupName, exampleName, 'html');
	}

	loadSassFile(groupName: string, exampleName: string): Observable<any> {
		return this.loadExampleFile(groupName, exampleName, 'scss');
	}

	private loadExampleFile(groupName: string, exampleName: string, extension: string): Observable<any> {
		return this.http.get(`assets/examples/${groupName}/${exampleName}/${exampleName}-example.component.${extension}.txt`,
			{responseType: 'text'});
	}

}
