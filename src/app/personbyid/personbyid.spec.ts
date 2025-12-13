import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Personbyid } from './personbyid';

describe('Personbyid', () => {
  let component: Personbyid;
  let fixture: ComponentFixture<Personbyid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personbyid],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => "1"
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Personbyid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});