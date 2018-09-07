import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile: any;
  repos: any[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

}
