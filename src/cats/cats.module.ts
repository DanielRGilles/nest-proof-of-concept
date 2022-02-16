import { Module } from '@nestjs/common';
import { CatService } from './service/cat.service';
import { CatController } from './controller/cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatPostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CatPostEntity])
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatsModule {}
