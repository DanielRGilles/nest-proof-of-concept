import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DogPost } from '../models/post.interface';
import { DogService } from '../service/dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}
  @Post()
  async create(@Body() post: DogPost): Promise<Observable<DogPost>> {
    return this.dogService.create(post);
  }
  @Get()
  async findAll(): Promise<Observable<DogPost[]>> {
    return this.dogService.findAll();
  }
  @Get(':id')
  async findOne(
    @Param('id') id: number,
    @Body() dogPost: DogPost,
  ): Promise<Observable<DogPost>> {
    return this.dogService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dogPost: DogPost,
  ): Promise<Observable<UpdateResult>> {
    return this.dogService.update(id, dogPost);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Observable<DeleteResult>> {
    return this.dogService.delete(id);
  }
}
