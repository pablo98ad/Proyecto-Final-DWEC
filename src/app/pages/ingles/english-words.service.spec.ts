import { TestBed } from '@angular/core/testing';

import { EnglishWordsService } from './english-words.service';

describe('EnglishWordsService', () => {
  let service: EnglishWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglishWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
