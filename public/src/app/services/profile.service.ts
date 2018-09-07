import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from   'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private searchString: string;
  profileSelected = new EventEmitter();

  constructor(private http: Http) {
    this.searchString = "";
  }

  getUserProfileInfo(name) {
    return this.http
      .get(`/api/users/${name}`)
      .pipe(map(res => res.json()));
  }
  getPopularUsers(name) {
    return this.http
      .get(`/api/users?q=${name}`)
      .pipe(map(res => res.json()));
  }
  getUserRepositories(name) {
    return this.http
      .get(`/api/users/${name}/repos`)
      .pipe(map(res => res.json()));
  }
}
