import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('url') private  url:string ,private http:HttpClient) { }

  getData(){

      return this.http.get(this.url)
                  
        
              
  }
  

  /*private handleError(error: Response){
    if(error.status === 404){
      return throwError(new NotFoundError)
    }
    if(error.status === 400){
      return throwError(new AppError)
    }
  }*/
}
