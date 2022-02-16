import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from '../src/app.service';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(AppService)
    .useValue(AppService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async() => {
    const req = await request(app.getHttpServer())
      .get('/api/v1/cat')
      .expect(200)
      
  });

  it('should be able to create a cat',  async() => {
    const res =  await request(app)
      .post('/api/v1/cat')
      .send({ name:'mike', description: 'another cat'});
    expect(res).toEqual({ id: expect.any(String), name: 'mike', description:'another cat', createdAt: expect.any(Date) });
  });



  afterAll(async () => {
    await app.close();
  });
});
