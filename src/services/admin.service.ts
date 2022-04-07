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
  getImages(id: string): Observable<any> {
    return this.http.get('asset/' + id);
  }
  getMetadata(id: string): Observable<any> {
    return this.http.get('metadata/' + id);
  }
  getCaptions(id: string): Observable<any> {
    return this.http.get('captions/' + id);
  }
  getAlbumName(name: string): Observable<any> {
    return this.http.get('album/' + name);
  }
}
