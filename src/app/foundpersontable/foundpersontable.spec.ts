import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foundpersontable } from './foundpersontable';

describe('Foundpersontable', () => {
  let component: Foundpersontable;
  let fixture: ComponentFixture<Foundpersontable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foundpersontable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foundpersontable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
