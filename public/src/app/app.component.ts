import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  searchString = "";
  selectedProfile: any;
  loaded: boolean = false;
  userProfiles = [];

  constructor(private profileService: ProfileService) {}

  searchUser(e) {
    e.preventDefault();
    if (this.searchString.length) {
      this.profileService.getPopularUsers(this.searchString).subscribe(res => {
        this.userProfiles = res.items;
        this.searchString = "";
        this.loaded = true;
      });
    }
  }

  resetContent() {
    this.userProfiles = [];
    this.searchString = '';
    this.selectedProfile = null;
    this.loaded = false;
  }

  ngOnInit() {
    this.profileService.profileSelected.subscribe(profile => {
      this.selectedProfile = profile;
      this.loaded = true;
      this.profileService
        .getUserRepositories(profile.login)
        .subscribe(repos => {
          this.selectedProfile.repos = repos;
        });
    });
  }
}
