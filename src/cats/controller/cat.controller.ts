import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CatPost } from '../models/post.interface';
import { CatService } from '../service/cat.service';

@Controller('cat')
export class CatController {
    constructor(private catService: CatService) {}
    @Post()
    async create( @Body() catPost: CatPost): Promise<Observable<CatPost>> {
        return this.catService.create(catPost)
    }
    @Get()
    async getEm() : Promise<Observable<CatPost[]>>  {
        return this.catService.getAll();
    }
    @Get(':id')
    async getWithId(
        @Param('id') id: number,
        @Body() catPost : CatPost
    ) : Promise<Observable<CatPost>>  {
        return this.catService.getByid(id);
    }
    @Put(':id')
    async update(
        @Param('id') id: number, 
        @Body() catPost: CatPost
    ): Promise<Observable<UpdateResult>> {
        return this.catService.updateCat(id, catPost)
    }
    @Delete(':id')
    async delete(
        @Param('id') id: number,
    ): Promise<Observable<DeleteResult>> {
        return this.catService.deleteCat(id);
    }
}
