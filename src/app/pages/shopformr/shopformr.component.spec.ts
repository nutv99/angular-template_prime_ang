import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopformrComponent } from './shopformr.component';

describe('ShopformrComponent', () => {
  let component: ShopformrComponent;
  let fixture: ComponentFixture<ShopformrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopformrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopformrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
