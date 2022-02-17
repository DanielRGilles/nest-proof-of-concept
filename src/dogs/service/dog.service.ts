import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DogPostEntity } from '../models/post.entity';
import { DogPost } from '../models/post.interface';

@Injectable()
export class DogService {
    constructor(
        @InjectRepository(DogPostEntity)
        private readonly dogPostRepository: Repository<DogPostEntity>
    ) {}

    createPost(dogPost: DogPost) : Observable<DogPost> {
        return from(this.dogPostRepository.save(dogPost));
    }
    getByid(id: number):Observable<DogPost> {
        return from(this.dogPostRepository.findOne(id));
    }
    getAll(): Observable<DogPost[]> {
        return from(this.dogPostRepository.find());
    }
    updateDog(id: number, dogPost: DogPost): Observable<UpdateResult> {
        return from(this.dogPostRepository.update(id, dogPost));
    }
    deleteDog(id: number): Observable<DeleteResult> {
        return from(this.dogPostRepository.delete(id));
    }
}
