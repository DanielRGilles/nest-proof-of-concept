import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CatPostEntity } from '../models/post.entity';
import { CatPost } from '../models/post.interface';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(CatPostEntity)
        private readonly catPostRepository: Repository<CatPostEntity>
    ) {}

    createPost(catPost: CatPost) : Observable<CatPost> {
        return from(this.catPostRepository.save(catPost));
    }
    getByid(id: number):Observable<CatPost> {
        return from(this.catPostRepository.findOne(id));
    }
    getAll(): Observable<CatPost[]> {
        return from(this.catPostRepository.find());
    }
    updateCat(id: number, catPost: CatPost): Observable<UpdateResult> {
        return from(this.catPostRepository.update(id, catPost));
    }
    deleteCat(id: number): Observable<DeleteResult> {
        return from(this.catPostRepository.delete(id));
    }
}
