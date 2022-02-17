import { Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DogPostEntity } from '../models/post.entity';
import { DogPost } from '../models/post.interface';
export declare class DogService {
    private readonly dogPostRepository;
    constructor(dogPostRepository: Repository<DogPostEntity>);
    createPost(dogPost: DogPost): Observable<DogPost>;
    getByid(id: number): Observable<DogPost>;
    getAll(): Observable<DogPost[]>;
    updateDog(id: number, dogPost: DogPost): Observable<UpdateResult>;
    deleteDog(id: number): Observable<DeleteResult>;
}
