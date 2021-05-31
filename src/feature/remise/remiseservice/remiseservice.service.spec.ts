import { Test, TestingModule } from '@nestjs/testing';
import { RemiseserviceService } from './remiseservice.service';

describe('RemiseserviceService', () => {
  let service: RemiseserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemiseserviceService],
    }).compile();

    service = module.get<RemiseserviceService>(RemiseserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
