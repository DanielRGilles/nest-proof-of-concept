import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Cats } from '../models/post.entity';
import { CatPost } from '../models/post.interface';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cats)
        private readonly catPostRepository: Repository<Cats>
    ) {}

    create(catPost: CatPost) : Observable<CatPost> {
        return from(this.catPostRepository.save(catPost));
    }
    findOne(id: number):Observable<CatPost> {
        return from(this.catPostRepository.findOne(id));
    }
    findAll(): Observable<CatPost[]> {
        return from(this.catPostRepository.find());
    }
    update(id: number, catPost: CatPost): Observable<UpdateResult> {
        return from(this.catPostRepository.update(id, catPost));
    }
    delete(id: number): Observable<DeleteResult> {
        return from(this.catPostRepository.delete(id));
    }
}
