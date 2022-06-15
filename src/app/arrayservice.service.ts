import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ArrayserviceService {

  constructor(private h:HttpClient) { 
    console.log('I am cons....')
   
  }


  private url: string = "/assets/data/emp.json";

  private trackError(error:any)
    {
      console.error(error);
      return throwError(error);
    }

    getData(): Observable<Employee[]>{
      return this.h.get<Employee[]>(this.url).pipe(
        tap(data=>console.log(data)),catchError(this.trackError)
      );
    }


}
