import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DogPost } from '../models/post.interface';
import { DogService } from '../service/dog.service';

@Controller('dog')
export class DogController {
    constructor(private dogService: DogService) {}
    @Post()
    async insert( @Body() post: DogPost): Promise<Observable<DogPost>> {
        return this.dogService.createPost(post)
    }
    @Get()
    async getEm() : Promise<Observable<DogPost[]>>  {
        return this.dogService.getAll();
    }
    @Get(':id')
    async getWithId(
        @Param('id') id: number,
        @Body() dogPost : DogPost
    ) : Promise<Observable<DogPost>>  {
        return this.dogService.getByid(id);
    }
    @Put(':id')
    async update(
        @Param('id') id: number, 
        @Body() dogPost: DogPost
    ): Promise<Observable<UpdateResult>> {
        return this.dogService.updateDog(id, dogPost)
    }
    @Delete(':id')
    async delete(
        @Param('id') id: number,
    ): Promise<Observable<DeleteResult>> {
        return this.dogService.deleteDog(id);
    }
}
