import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAnnotation } from "../models/iannotaiton";

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor(private httpClient: HttpClient) {
  }

  loadAnnotations(): Observable<IAnnotation[]> {
    return this.httpClient.get<{ status: string; message: string }>(
      'https://dummyjson.com/http/200/[{"id":"a1","radiusX":20,"radiusY":25,"x":50,"y":60}]'
    ).pipe(map(response => JSON.parse(response.message)))
  }
}
