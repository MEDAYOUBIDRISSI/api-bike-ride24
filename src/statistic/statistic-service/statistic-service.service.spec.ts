import { Test, TestingModule } from '@nestjs/testing';
import { StatisticServiceService } from './statistic-service.service';

describe('StatisticServiceService', () => {
  let service: StatisticServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatisticServiceService],
    }).compile();

    service = module.get<StatisticServiceService>(StatisticServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
