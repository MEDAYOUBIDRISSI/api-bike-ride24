import { Test, TestingModule } from '@nestjs/testing';
import { MarqueserviceService } from './marqueservice.service';

describe('MarqueserviceService', () => {
  let service: MarqueserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarqueserviceService],
    }).compile();

    service = module.get<MarqueserviceService>(MarqueserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
