import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Foundpersontable } from './foundpersontable';

describe('Foundpersontable', () => {
  let component: Foundpersontable;
  let fixture: ComponentFixture<Foundpersontable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foundpersontable],
      providers: [
        provideRouter([]) // THIS FIXES ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Foundpersontable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});