import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupconfirmComponent } from './popupconfirm.component';

describe('PopupconfirmComponent', () => {
  let component: PopupconfirmComponent;
  let fixture: ComponentFixture<PopupconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
