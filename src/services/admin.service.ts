import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  search(nameSearch: string, searhText: string): Observable<any> {
    return this.http.get(`search?${nameSearch}=(${searhText}))`);
  }
  search2(text: string): Observable<any> {
    return this.http.get(`search?${text}`);
  }
  getImages(id: string): Observable<any> {
    return this.http.get('asset/' + id);
  }
  getMetadata(data: any): Observable<any> {
    return this.http.get(`metadata/${data.nasa_id}`);
  }
  getMetadata2(text: any): Observable<any> {
    return this.http.get(`metadata/${text}`);
  }
  getCaptions(id: string): Observable<any> {
    return this.http.get('captions/' + id);
  }
  getAlbumName(name: string): Observable<any> {
    return this.http.get('album/' + name);
  }
}
