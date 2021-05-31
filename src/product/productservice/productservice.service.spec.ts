import { Test, TestingModule } from '@nestjs/testing';
import { ProductserviceService } from './productservice.service';

describe('ProductserviceService', () => {
  let service: ProductserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductserviceService],
    }).compile();

    service = module.get<ProductserviceService>(ProductserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
