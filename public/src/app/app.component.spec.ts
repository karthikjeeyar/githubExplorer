import { ComponentFixture, TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        HttpModule
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
      });
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'GitExplorer'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    console.log('app', app)
    expect(app.searchString).toEqual("");
    expect(app.loaded).toEqual(false);
  }));

  it('should render a valid title', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logo__title').textContent).toContain('Git Explorer');
  }));

  it(`should call the searchUser method'`, async(async() => {
    const compiled = fixture.debugElement.nativeElement;

    spyOn(component, "searchUser");
    component.searchString = "karthikjeeyar";
    compiled.querySelector(".search__button").click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.searchUser).toHaveBeenCalled();
  }));
});
