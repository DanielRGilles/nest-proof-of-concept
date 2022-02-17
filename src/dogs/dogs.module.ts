import { Module } from '@nestjs/common';
import { DogService } from './service/dog.service';
import { DogController } from './controller/dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogPostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DogPostEntity])
  ],
  providers: [DogService],
  controllers: [DogController]
})
export class DogsModule {}

