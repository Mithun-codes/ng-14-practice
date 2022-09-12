import {Injectable} from '@angular/core';
import {ApiService} from "../../shared/services/api/api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Test1ApiService {
  private PATH: string = 'https://dummyjson.com/';

  constructor(private api: ApiService) {
  }

  getAll(): Observable<any> {
    return this.api.getCall(this.PATH + 'products');
  }

  getProduct(id: string): Observable<any> {
    return this.api.getCall(this.PATH + 'products/' + id);
  }
}
