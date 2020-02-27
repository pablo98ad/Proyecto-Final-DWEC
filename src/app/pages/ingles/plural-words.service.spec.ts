import { TestBed } from '@angular/core/testing';

import { PluralWordsService } from './plural-words.service';

describe('PluralWordsService', () => {
  let service: PluralWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluralWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
