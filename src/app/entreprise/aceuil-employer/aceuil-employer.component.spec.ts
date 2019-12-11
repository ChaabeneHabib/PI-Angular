import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilEmployerComponent } from './aceuil-employer.component';

describe('AceuilEmployerComponent', () => {
  let component: AceuilEmployerComponent;
  let fixture: ComponentFixture<AceuilEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceuilEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
