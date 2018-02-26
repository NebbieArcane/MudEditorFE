import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneCommandFormComponent } from './zone-command-form.component';

describe('ZoneCommandFormComponent', () => {
  let component: ZoneCommandFormComponent;
  let fixture: ComponentFixture<ZoneCommandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneCommandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneCommandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
