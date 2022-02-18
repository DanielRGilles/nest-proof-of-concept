import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Dogs } from '../models/post.entity';
import { DogPost } from '../models/post.interface';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dogs)
    private readonly dogPostRepository: Repository<Dogs>,
  ) {}

  create(dogPost: DogPost): Observable<DogPost> {
    return from(this.dogPostRepository.save(dogPost));
  }
  findOne(id: number): Observable<DogPost> {
    return from(this.dogPostRepository.findOne(id));
  }
  findAll(): Observable<DogPost[]> {
    return from(this.dogPostRepository.find());
  }
  update(id: number, dogPost: DogPost): Observable<UpdateResult> {
    return from(this.dogPostRepository.update(id, dogPost));
  }
  delete(id: number): Observable<DeleteResult> {
    return from(this.dogPostRepository.delete(id));
  }
}
