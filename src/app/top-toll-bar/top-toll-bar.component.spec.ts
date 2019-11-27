import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTollBarComponent } from './top-toll-bar.component';

describe('TopTollBarComponent', () => {
  let component: TopTollBarComponent;
  let fixture: ComponentFixture<TopTollBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTollBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
