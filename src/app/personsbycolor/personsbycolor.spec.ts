import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Personsbycolor } from './personsbycolor';

describe('Personsbycolor', () => {
  let component: Personsbycolor;
  let fixture: ComponentFixture<Personsbycolor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personsbycolor],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'white'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Personsbycolor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});