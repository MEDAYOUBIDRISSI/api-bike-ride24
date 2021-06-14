import { Test, TestingModule } from '@nestjs/testing';
import { CommandeServiceService } from './commande-service.service';

describe('CommandeServiceService', () => {
  let service: CommandeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandeServiceService],
    }).compile();

    service = module.get<CommandeServiceService>(CommandeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
