import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Addperson } from './addperson';

describe('Addperson', () => {
  let component: Addperson;
  let fixture: ComponentFixture<Addperson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addperson],
      providers: [
        provideRouter([]) // THIS FIXES ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Addperson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});