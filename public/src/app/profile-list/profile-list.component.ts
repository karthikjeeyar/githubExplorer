import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: "app-profile-list",
  templateUrl: "./profile-list.component.html",
  styleUrls: ["./profile-list.component.css"]
})
export class ProfileListComponent implements OnInit {
  @Input() profiles: [{ login: String }];
  constructor(private profileService: ProfileService) {
    this.profileService.getPopularUsers("karthik").subscribe(profile => {
      console.log("ProfileInfo", profile);
    });
  }

  ngOnInit() {}
}
