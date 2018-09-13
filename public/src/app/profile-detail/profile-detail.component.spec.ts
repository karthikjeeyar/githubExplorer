import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailComponent } from './profile-detail.component';
import { HttpModule } from "@angular/http";

describe('ProfileDetailComponent', () => {
  let component: ProfileDetailComponent;
  let fixture: ComponentFixture<ProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDetailComponent],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
