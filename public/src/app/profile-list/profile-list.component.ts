import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { logging } from '../../../node_modules/protractor';

@Component({
  selector: "app-profile-list",
  templateUrl: "./profile-list.component.html",
  styleUrls: ["./profile-list.component.scss"]
})
export class ProfileListComponent implements OnInit {
  @Input() profiles: [{ login: String, avatar_url: String }];
  @Input() currentProfile: any;

  constructor(private profileService: ProfileService) {
  }

  profileSelected(profile) {
    this.profileService.getUserProfileInfo(profile.login)
    .subscribe((profileInfo) => this.profileService.profileSelected.emit(profileInfo) )
  }
  ngOnInit() {}
}
