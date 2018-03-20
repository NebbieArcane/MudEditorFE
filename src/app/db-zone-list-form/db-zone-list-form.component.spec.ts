import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbZoneListFormComponent } from './db-zone-list-form.component';

describe('DbZoneListFormComponent', () => {
  let component: DbZoneListFormComponent;
  let fixture: ComponentFixture<DbZoneListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbZoneListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbZoneListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
