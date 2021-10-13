import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

const SUCCESS_STATUS_CODE = 200;

describe('AppController (e2e)', () => {
   let app: INestApplication;

   beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
         imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();
   });

   it('/ (GET)', () => {
      return request(app.getHttpServer())
         .get('/')
         .expect(SUCCESS_STATUS_CODE)
         .expect('Hello World!');
   });
});
