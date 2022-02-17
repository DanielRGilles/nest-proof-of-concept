import { Module } from '@nestjs/common';
import { DogService } from './service/dog.service';
import { DogController } from './controller/dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dogs } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dogs])
  ],
  providers: [DogService],
  controllers: [DogController]
})
export class DogsModule {}

