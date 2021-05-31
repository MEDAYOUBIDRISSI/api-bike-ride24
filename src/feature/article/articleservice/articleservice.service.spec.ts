import { Test, TestingModule } from '@nestjs/testing';
import { ArticleserviceService } from './articleservice.service';

describe('ArticleserviceService', () => {
  let service: ArticleserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleserviceService],
    }).compile();

    service = module.get<ArticleserviceService>(ArticleserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
