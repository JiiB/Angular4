import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdialogComponent } from './defaultdialog.component';

describe('DefaultdialogComponent', () => {
  let component: DefaultdialogComponent;
  let fixture: ComponentFixture<DefaultdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
