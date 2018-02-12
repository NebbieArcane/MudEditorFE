import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobsComponent } from './mobs.component';

describe('MobsComponent', () => {
  let component: MobsComponent;
  let fixture: ComponentFixture<MobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
