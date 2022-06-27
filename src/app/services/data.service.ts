import { BadRequest } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  url:string ,private http:HttpClient) { }

  getData(){

      return this.http.get(this.url)
  }

  create(resource:any){
    
      return this.http.post(this.url,resource)
           
  }

  update(resource:any){
    return this.http.put(this.url+'/'+resource.id, resource)
  }

  delete(resource:any){
    return this.http.delete(this.url+'/'+resource.id)
              
  }
  private handleError(error:Response){
    if(error.status === 400){
      return throwError(new NotFoundError)
    }else if(error.status === 404){
      return throwError(new BadRequest)
    }
    return throwError(new AppError)
  }
}
function catchError(handleError: (error: Response) => any): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

