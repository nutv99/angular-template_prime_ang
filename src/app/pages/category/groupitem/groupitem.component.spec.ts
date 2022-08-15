import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupitemComponent } from './groupitem.component';

describe('GroupitemComponent', () => {
  let component: GroupitemComponent;
  let fixture: ComponentFixture<GroupitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
