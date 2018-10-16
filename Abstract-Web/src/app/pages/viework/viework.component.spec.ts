import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworkComponent } from './viework.component';

describe('VieworkComponent', () => {
  let component: VieworkComponent;
  let fixture: ComponentFixture<VieworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
