import { Module } from '@nestjs/common';
import { CatService } from './service/cat.service';
import { CatController } from './controller/cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cats])
  ],
  providers: [CatService],
  controllers: [CatController]
})
export class CatsModule {}
