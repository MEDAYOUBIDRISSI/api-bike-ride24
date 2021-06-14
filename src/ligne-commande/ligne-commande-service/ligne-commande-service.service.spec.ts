import { Test, TestingModule } from '@nestjs/testing';
import { LigneCommandeServiceService } from './ligne-commande-service.service';

describe('LigneCommandeServiceService', () => {
  let service: LigneCommandeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LigneCommandeServiceService],
    }).compile();

    service = module.get<LigneCommandeServiceService>(LigneCommandeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
