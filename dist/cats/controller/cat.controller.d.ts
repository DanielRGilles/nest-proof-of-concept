import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CatPost } from '../models/post.interface';
import { CatService } from '../service/cat.service';
export declare class CatController {
    private catService;
    constructor(catService: CatService);
    create(catPost: CatPost): Promise<Observable<CatPost>>;
    findAll(): Promise<Observable<CatPost[]>>;
    findOne(id: number, catPost: CatPost): Promise<Observable<CatPost>>;
    update(id: number, catPost: CatPost): Promise<Observable<UpdateResult>>;
    delete(id: number): Promise<Observable<DeleteResult>>;
}
