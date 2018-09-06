import { Component } from '@angular/core';
import { ProfileService } from './services/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  searchString = '';
  userProfiles = [{ login: 'karthik' }, {login: 'sreeram'}];

  constructor(private profileService: ProfileService) {}

  searchUser(e) {
    e.preventDefault();
    this.profileService.getPopularUsers(this.searchString)
      .subscribe((res) => {
        this.userProfiles = res.items;
        this.searchString = '';
      })
  }
}
