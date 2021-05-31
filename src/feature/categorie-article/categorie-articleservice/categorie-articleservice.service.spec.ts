import { Test, TestingModule } from '@nestjs/testing';
import { CategorieArticleserviceService } from './categorie-articleservice.service';

describe('CategorieArticleserviceService', () => {
  let service: CategorieArticleserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorieArticleserviceService],
    }).compile();

    service = module.get<CategorieArticleserviceService>(CategorieArticleserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
