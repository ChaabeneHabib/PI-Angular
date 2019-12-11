import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingEmployerComponent } from './setting-employer.component';

describe('SettingEmployerComponent', () => {
  let component: SettingEmployerComponent;
  let fixture: ComponentFixture<SettingEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
