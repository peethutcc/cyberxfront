import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsdialogComponent } from './windowsdialog.component';

describe('WindowsdialogComponent', () => {
  let component: WindowsdialogComponent;
  let fixture: ComponentFixture<WindowsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
