import { Test, TestingModule } from '@nestjs/testing';
import { TageserviceService } from './tageservice.service';

describe('TageserviceService', () => {
  let service: TageserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TageserviceService],
    }).compile();

    service = module.get<TageserviceService>(TageserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
