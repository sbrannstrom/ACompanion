import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IBaseObject, IType } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getOneItem(id: number, type: IType): Observable<IBaseObject> {
    return this.httpClient.get<IBaseObject>(`${this.apiUrl}${type}/${id}`).pipe(
      tap(item => {
        // console.log(item);
      })
    );
  }

  getAllItems(type: IType): Observable<IBaseObject[]> {
    return this.httpClient.get<IBaseObject[]>(this.apiUrl + type).pipe(
      tap(fish => {
        // console.log(fish);
      })
    );
  }
}
