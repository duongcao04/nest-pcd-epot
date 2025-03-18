import { Test, TestingModule } from '@nestjs/testing';
import { PrebuiltsController } from './prebuilts.controller';
import { PrebuiltsService } from './prebuilts.service';

describe('PrebuiltsController', () => {
  let controller: PrebuiltsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrebuiltsController],
      providers: [PrebuiltsService],
    }).compile();

    controller = module.get<PrebuiltsController>(PrebuiltsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
