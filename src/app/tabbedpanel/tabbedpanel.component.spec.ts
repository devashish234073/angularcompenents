import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedpanelComponent } from './tabbedpanel.component';

describe('TabbedpanelComponent', () => {
  let component: TabbedpanelComponent;
  let fixture: ComponentFixture<TabbedpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
