import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCadastro(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  getCadastro(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  updateCadastro(data : any,produto: string){
    return this.http.put<any>("http://localhost:3000/posts",+ produto,data)
    .pipe(map((res:any)=>{
      return res;
    }))

  }

  deleteCadastro(produto: string){
    return this.http.delete<any>("http://localhost:3000/posts" + produto )
    .pipe(map((res:any)=>{
      return res;
    }))

  }

}

