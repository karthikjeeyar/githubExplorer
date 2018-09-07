import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "public";
  searchString = "";
  selectedProfile: any;
  userProfiles = [
    {
      login: "karthik",
      avatar_url: "https://avatars3.githubusercontent.com/u/9964343?v=4"
    },
    {
      login: "sreeram",
      avatar_url: "https://avatars3.githubusercontent.com/u/9964343?v=4"
    }
  ];

  constructor(private profileService: ProfileService) {}

  searchUser(e) {
    e.preventDefault();
    if (this.searchString.length) {
      this.profileService.getPopularUsers(this.searchString).subscribe(res => {
        this.userProfiles = res.items;
        this.searchString = "";
      });
    }
  }

  ngOnInit() {
    this.profileService.profileSelected.subscribe(
      (profile) => {
        this.selectedProfile = profile;
        this.profileService.getUserRepositories(profile.login)
          .subscribe((repos) => {
            this.selectedProfile.repos = repos;
            console.log('Selected', this.selectedProfile)
        })
      }
    )
  }
}
