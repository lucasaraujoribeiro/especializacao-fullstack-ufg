import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria} from "../classes/produto.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBaseApi = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlBaseApi);
  }

  save(categoria: Categoria): Observable<any>{
    return this.http.post<Categoria>(`${this.urlBaseApi}`, categoria);
  }

  update(categoria: Categoria): Observable<any>{
    return this.http.put<Categoria>(`${this.urlBaseApi}/${categoria.id}`, categoria);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.urlBaseApi}/${id}`);
  }

}
