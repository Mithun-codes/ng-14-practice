import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public static readonly  HTTP_OVERRIDE_HEADER =  'X_HTTP_Method-Override';

  /*Needed since Citi Velocity portal blocks PUT and DELETE requests*/
  private static addOverrideHeader(headers: HttpHeaders | undefined, httpType: string) {
    if (!headers) {
      headers = new HttpHeaders();
    }
    headers.set(ApiService.HTTP_OVERRIDE_HEADER, httpType);
  }

  getCall(url: string, headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    if (!headers) {
      return this.http.get(url);
    } else {
      if (!params) {
        return this.http.get(url, { headers});
      } else {
        return this.http.get(url, { headers, params });
      }
    }
  }

  postCall<T>(url: string, body: any, headers?: HttpHeaders): Observable<any> {
    if (!headers) {
      return this.http.post(url, body);
    } else {
      return this.http.post(url, body, {headers});
    }
  }

  putCall(url: string, body?: any, headers?: HttpHeaders): Observable<any> {
    ApiService.addOverrideHeader(headers, 'PUT');
    return this.http.post(url, body, {headers});
  }

  deleteCall(url: string, body?: any, headers?: HttpHeaders): Observable<any> {
    ApiService.addOverrideHeader(headers, 'DELETE');
    return this.http.post(url, body, {headers});
  }


  actDeleteCall(url: string, body?: any, headers?: HttpHeaders): Observable<any> {
    // ApiService.addOverrideHeader(headers, 'DELETE');
    // return this.http.('delete', url, {headers: headers, body: body})
    return this.http.delete(url, { headers });
  }

  actPutCall(url: string, body?: any, headers?: HttpHeaders): Observable<any> {
    // ApiService.addOverrideHeader(headers, 'put');
    return this.http.put(url, body, {headers});
  }

  excelDownloadCall(url: string, body?: any, headers?: HttpHeaders): Observable<any> {
    return this.http.post(url, body, {headers});
  }

  csvDownloadCall(url: string, headers?: HttpHeaders): Observable<any> {
    return this.http.post(url, {headers});
  }
}
