import { Test, TestingModule } from '@nestjs/testing';
import { UniverserviceService } from './universervice.service';

describe('UniverserviceService', () => {
  let service: UniverserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniverserviceService],
    }).compile();

    service = module.get<UniverserviceService>(UniverserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
