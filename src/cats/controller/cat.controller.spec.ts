import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from '../service/cat.service';
import { CatController } from './cat.controller';



describe('CatController', () => {
  let appController: CatController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).compile();

    appController = app.get<CatController>(CatController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getEm()).toBe([]);
    });
    
  });
});
