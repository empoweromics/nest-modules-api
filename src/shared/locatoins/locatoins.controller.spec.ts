import { Test, TestingModule } from '@nestjs/testing';
import { LocatoinsController } from './locatoins.controller';

describe('LocatoinsController', () => {
  let controller: LocatoinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocatoinsController],
    }).compile();

    controller = module.get<LocatoinsController>(LocatoinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
