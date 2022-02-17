import { Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CatPostEntity } from '../models/post.entity';
import { CatPost } from '../models/post.interface';
export declare class CatService {
    private readonly catPostRepository;
    constructor(catPostRepository: Repository<CatPostEntity>);
    create(catPost: CatPost): Observable<CatPost>;
    findOne(id: number): Observable<CatPost>;
    findAll(): Observable<CatPost[]>;
    update(id: number, catPost: CatPost): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
