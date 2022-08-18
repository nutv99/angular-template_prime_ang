import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testpage3Component } from './testpage3.component';

describe('Testpage3Component', () => {
  let component: Testpage3Component;
  let fixture: ComponentFixture<Testpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testpage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
