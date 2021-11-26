import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CxmlComponent } from './cxml.component';

describe('CxmlComponent', () => {
  let component: CxmlComponent;
  let fixture: ComponentFixture<CxmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CxmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
