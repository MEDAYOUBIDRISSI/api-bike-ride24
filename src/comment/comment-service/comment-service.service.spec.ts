import { Test, TestingModule } from '@nestjs/testing';
import { CommentServiceService } from './comment-service.service';

describe('CommentServiceService', () => {
  let service: CommentServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentServiceService],
    }).compile();

    service = module.get<CommentServiceService>(CommentServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
