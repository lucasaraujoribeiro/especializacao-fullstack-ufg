import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "../classes/produto.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlBaseApi = environment.apiUrl + '/produtos';


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.urlBaseApi);
  }

  save(produto: Produto): Observable<any>{
    return this.http.post<Produto>(`${this.urlBaseApi}`, produto);
  }

  update(produto: Produto): Observable<any>{
    return this.http.put<Produto>(`${this.urlBaseApi}/${produto.id}`, produto);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.urlBaseApi}/${id}`);
  }

}
