import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personsbycolor } from './personsbycolor';

describe('Personsbycolor', () => {
  let component: Personsbycolor;
  let fixture: ComponentFixture<Personsbycolor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personsbycolor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personsbycolor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
