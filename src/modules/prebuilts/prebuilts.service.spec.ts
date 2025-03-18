import { Test, TestingModule } from '@nestjs/testing';
import { PrebuiltsService } from './prebuilts.service';

describe('PrebuiltsService', () => {
  let service: PrebuiltsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrebuiltsService],
    }).compile();

    service = module.get<PrebuiltsService>(PrebuiltsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
