import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RpnResponse} from '../calculator/response';
import {RpnRequest} from '../calculator/request';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  baseUrl = 'http://localhost:8080/rpn/convert';
  rpnRequest: RpnRequest;
  constructor(private http: HttpClient) {

    this.rpnRequest = new RpnRequest();
  }

  calculate(value: string): Observable<RpnResponse> {
    this.rpnRequest.inputData = value;
    return this.http.post<RpnResponse>(this.baseUrl, this.rpnRequest);
  }
}
