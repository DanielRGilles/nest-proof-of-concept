import { Test, TestingModule } from '@nestjs/testing';
import { Any } from 'typeorm';
import { AppService } from '../../app.service';
import { CatService } from '../service/cat.service';
import { CatController } from './cat.controller';


describe('CatController', () => {
  let controller: CatController;

  const mockCatService = {
    insert: jest.fn(catPost =>{
      return {
        // id: 1,
        ...catPost
      }
    } )
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatController],
      providers: [CatService],
    }).overrideProvider(CatService).useValue(mockCatService).compile();

    controller = module.get<CatController>(CatController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('create a cat', () => {
      expect(controller.insert({ name: 'kitty'})).toEqual({
        id: expect.any(Number),
        name: 'kitty',
        description:'fluffy',
        createdAt: expect.any(Date)
      });
    });
    
    
  });
});
