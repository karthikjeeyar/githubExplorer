import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListComponent } from './profile-list.component';
import { HttpModule } from "@angular/http";

describe('ProfileListComponent', () => {
  let component: ProfileListComponent;
  let fixture: ComponentFixture<ProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileListComponent],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
