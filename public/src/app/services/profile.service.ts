import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";
import { EventEmitter } from "@angular/core";
import { environment } from "../../environments/environment.prod";
@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private searchString: string;
  profileSelected = new EventEmitter();
  private apiUrl = environment.apiUrl;

  constructor(private http: Http) {
    this.searchString = "";
  }

  getUserProfileInfo(name) {
    return this.http
      .get(`${this.apiUrl}/users/${name}`)
      .pipe(map((res) => res.json()));
  }
  getPopularUsers(name) {
    return this.http
      .get(`${this.apiUrl}/search/users?q=${name}`)
      .pipe(map((res) => res.json()));
  }
  getUserRepositories(name) {
    return this.http
      .get(`${this.apiUrl}/users/${name}/repos`)
      .pipe(map((res) => res.json()));
  }
}
