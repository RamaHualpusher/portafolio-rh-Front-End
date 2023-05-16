import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  private apiUrl = 'https://portfolio-rh.onrender.com/api';
  private dataSubject = new BehaviorSubject<T | null>(null);
  data$: Observable<T | null> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`).pipe(
      tap(data => {
        this.dataSubject.next(data);
      })
    );
  }
  createData(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data).pipe(
      tap(newData => {
        this.dataSubject.next(newData);
      })
    );
  }

  updateData(endpoint: string, id: number, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, data).pipe(
      tap(updatedData => {
        // Actualizamos la data almacenada
        this.dataSubject.next(updatedData);
      })
    );
  }
  // data.service.ts
updateDataPatch(endpoint: string, id: number, data: any): Observable<T> {
  return this.http.patch<T>(`${this.apiUrl}/${endpoint}/${id}`, data).pipe(
    tap(updatedData => {
      // Actualizamos la data almacenada
      this.dataSubject.next(updatedData);
    })
  );
}


  deleteData(endpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`).pipe(
      tap(deletedData => {
        this.dataSubject.next(deletedData);
      })
    );
  }

}
