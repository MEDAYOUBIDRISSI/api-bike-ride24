import { Test, TestingModule } from '@nestjs/testing';
import { PaypalInfoServiceService } from './paypal-info-service.service';

describe('PaypalInfoServiceService', () => {
  let service: PaypalInfoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaypalInfoServiceService],
    }).compile();

    service = module.get<PaypalInfoServiceService>(PaypalInfoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
