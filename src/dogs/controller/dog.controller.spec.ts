import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from '../service/dog.service';
import { DogController } from './dog.controller';

describe('DogController', () => {
  let controller: DogController;

  const mockDogService = {
    create: jest.fn((dogPost) => {
      return {
        id: 1,
        name: 'doggy',
        description: 'fluffy',
        createdAt: '2019-10-31T12:34',
      };
    }),
    findAll: jest.fn((dogPost) => {
      return [
        {
          id: 1,
          name: 'doggy',
          description: 'fluffy',
          createdAt: '2019-10-31T12:34',
        },
        {
          id: 2,
          name: 'sdoggy',
          description: 'fruffy',
          createdAt: '2018-10-31T12:34',
        },
      ];
    }),
    findOne: jest.fn((dogPost) => {
      return {
        id: 1,
        name: 'doggy',
        description: 'fluffy',
        createdAt: '2019-10-31T12:34',
      };
    }),
    update: jest.fn((dogPost) => {
      return {
        id: 1,
        name: 'Mr. doggy',
        description: 'fluffy',
        createdAt: '2019-10-31T12:34',
      };
    }),
    delete: jest.fn((dogPost) => {
      return {
        id: 2,
        name: 'sdoggy',
        description: 'fruffy',
        createdAt: '2018-10-31T12:34',
      };
    }),
  };

  const mockdoggy = {
    id: 1,
    name: 'doggy',
    description: 'fluffy',
    createdAt: '2019-10-31T12:34',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
      providers: [DogService],
    })
      .overrideProvider(DogService)
      .useValue(mockDogService)
      .compile();

    controller = module.get<DogController>(DogController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('create a cat', async () => {
      expect(await controller.create({ name: 'doggy' })).toEqual({
        id: expect.any(Number),
        name: 'doggy',
        description: 'fluffy',
        createdAt: expect.any(String),
      });
    });

    it('get all cats', async () => {
      expect(await controller.findAll()).toEqual(
        expect.arrayContaining([
          {
            id: expect.any(Number),
            name: 'doggy',
            description: 'fluffy',
            createdAt: expect.any(String),
          },
          {
            id: 2,
            name: 'sdoggy',
            description: 'fruffy',
            createdAt: '2018-10-31T12:34',
          },
        ]),
      );
    });

    it('gets one cat', async () => {
      expect(await controller.findOne(1, { name: 'doggy' })).toEqual({
        id: expect.any(Number),
        name: 'doggy',
        description: 'fluffy',
        createdAt: expect.any(String),
      });
    });

    it('updates one cat', async () => {
      expect(await controller.update(1, { name: 'Mr. doggy' })).toEqual({
        id: expect.any(Number),
        name: 'Mr. doggy',
        description: 'fluffy',
        createdAt: expect.any(String),
      });
    });

    it('deletes one cat', async () => {
      expect(await controller.delete(1)).toEqual({
        id: 2,
        name: 'sdoggy',
        description: 'fruffy',
        createdAt: '2018-10-31T12:34',
      });
    });
  });
});
