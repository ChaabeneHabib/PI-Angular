import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilEntrepriseComponent } from './aceuil-entreprise.component';

describe('AceuilEntrepriseComponent', () => {
  let component: AceuilEntrepriseComponent;
  let fixture: ComponentFixture<AceuilEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceuilEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
