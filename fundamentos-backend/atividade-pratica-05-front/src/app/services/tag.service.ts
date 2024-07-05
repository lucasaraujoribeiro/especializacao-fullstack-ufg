import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria, Tag} from "../classes/produto.model";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  urlBaseApi = 'http://localhost:8080/api/tags';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Tag[]>{
    return this.http.get<Tag[]>(this.urlBaseApi);
  }

  save(tag: Tag): Observable<any>{
    return this.http.post<Tag>(`${this.urlBaseApi}`, tag);
  }

  update(tag: Tag): Observable<any>{
    return this.http.put<Tag>(`${this.urlBaseApi}/${tag.id}`, tag);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.urlBaseApi}/${id}`);
  }

}
