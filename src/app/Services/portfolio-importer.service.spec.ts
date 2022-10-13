import { TestBed } from '@angular/core/testing';

import { PortfolioImporterService } from './portfolio-importer.service';

describe('PortfolioImporterService', () => {
  let service: PortfolioImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
