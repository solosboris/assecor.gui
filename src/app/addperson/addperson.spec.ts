import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addperson } from './addperson';

describe('Addperson', () => {
  let component: Addperson;
  let fixture: ComponentFixture<Addperson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addperson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addperson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
