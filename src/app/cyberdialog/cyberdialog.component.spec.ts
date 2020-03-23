import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberdialogComponent } from './cyberdialog.component';

describe('CyberdialogComponent', () => {
  let component: CyberdialogComponent;
  let fixture: ComponentFixture<CyberdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyberdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
