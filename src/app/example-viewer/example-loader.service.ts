import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExampleLoaderService {

  constructor(private http: HttpClient) {
  }

  loadExampleFile(exampleName: string): Observable<any> {
    return this.http.get('assets/examples/panel/tile/tile-example.component.ts.txt', {responseType: 'text'});
  }

}
