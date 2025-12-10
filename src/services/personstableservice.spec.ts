import { TestBed } from '@angular/core/testing';
import { PersonsTableService } from './personstableservice';

describe('PersonsTableService', () => {
  let service: PersonsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});