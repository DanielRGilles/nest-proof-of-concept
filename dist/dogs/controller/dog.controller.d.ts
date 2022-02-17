import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DogPost } from '../models/post.interface';
import { DogService } from '../service/dog.service';
export declare class DogController {
    private dogService;
    constructor(dogService: DogService);
    insert(post: DogPost): Promise<Observable<DogPost>>;
    getEm(): Promise<Observable<DogPost[]>>;
    getWithId(id: number, dogPost: DogPost): Promise<Observable<DogPost>>;
    update(id: number, dogPost: DogPost): Promise<Observable<UpdateResult>>;
    delete(id: number): Promise<Observable<DeleteResult>>;
}
