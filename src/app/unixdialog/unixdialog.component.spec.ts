import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixdialogComponent } from './unixdialog.component';

describe('UnixdialogComponent', () => {
  let component: UnixdialogComponent;
  let fixture: ComponentFixture<UnixdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnixdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
