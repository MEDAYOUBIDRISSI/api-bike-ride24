import { Test, TestingModule } from '@nestjs/testing';
import { ImageserviceService } from './imageservice.service';

describe('ImageserviceService', () => {
  let service: ImageserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageserviceService],
    }).compile();

    service = module.get<ImageserviceService>(ImageserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
