import { Test, TestingModule } from '@nestjs/testing';
import { Any } from 'typeorm';
import { AppService } from '../../app.service';
import { CatService } from '../service/cat.service';
import { CatController } from './cat.controller';


describe('CatController', () => {
  let controller: CatController;

  const mockCatService = {
    create: jest.fn(catPost =>{
      return {
        id: 1,
        name: 'kitty',
        description: 'fluffy',
        createdAt: '2019-10-31T12:34'
      }
    } ),
    findAll: jest.fn(catPost =>{
      return [
         {
        id: 1,
        name: 'kitty',
        description: 'fluffy',
        createdAt: '2019-10-31T12:34'
      },
      {
        id: 2,
        name: 'skitty',
        description: 'fruffy',
        createdAt: '2018-10-31T12:34'
      },
    ]
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

    it('create a cat', async () => {
      expect(await controller.create({ name: 'kitty'})).toEqual({
        id: expect.any(Number),
        name: 'kitty',
        description:'fluffy',
        createdAt: expect.any(String)
      });
    });


    it('get all cats', async () => {
      expect(await controller.findAll()).toEqual(expect.arrayContaining([{
        id: expect.any(Number),
        name: 'kitty',
        description:'fluffy',
        createdAt: expect.any(String)
      },
      {
        id: 2,
        name: 'skitty',
        description: 'fruffy',
        createdAt: '2018-10-31T12:34'
      }]));
    });
    
    
  });
});
