import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}