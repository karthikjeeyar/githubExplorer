import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from   'rxjs/operators';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private searchString: string;
  private clientId = "e386f9e4d59ddcc5d8fb";
  private clientSecret = "0589676aac7beea6eb8c1cc9776c97108ef96167";
  profileSelected = new EventEmitter();

  constructor(private http: Http) {
    console.log("Profile service booted up...");
    this.searchString = "";
  }

  getUserProfileInfo(name) {
    return this.http
      .get(
        `https://api.github.com/users/${name}?client_id=${
          this.clientId
        }&client_secret=${this.clientSecret}`
      )
      .pipe(map(res => res.json()));
  }
  getPopularUsers(name) {
    return this.http
      .get(`https://api.github.com/search/users?q=${name}`)
      .pipe(map(res => res.json()));
  }
  getUserRepositories(name) {
    return this.http
      .get(`https://api.github.com/users/${name}/repos?client_id = ${this.clientId}
      &client_secret=${ this.clientSecret}`)
      .pipe(map(res => res.json()));
  }
}
