import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  public postMethodWithOptions(url: string, requestBody: any, options: any): Observable<any> {
    return this.httpClient.post(url, requestBody, options);
  }
}
