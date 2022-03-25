import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAboutMeComponent } from './banner-about-me.component';

describe('BannerAboutMeComponent', () => {
  let component: BannerAboutMeComponent;
  let fixture: ComponentFixture<BannerAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
