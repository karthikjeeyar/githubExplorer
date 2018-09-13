import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpModule } from "@angular/http";

describe('ProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));

});
