import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkdialogComponent } from './networkdialog.component';

describe('NetworkdialogComponent', () => {
  let component: NetworkdialogComponent;
  let fixture: ComponentFixture<NetworkdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
