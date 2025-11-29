import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personbyid } from './personbyid';

describe('Personbyid', () => {
  let component: Personbyid;
  let fixture: ComponentFixture<Personbyid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personbyid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personbyid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
