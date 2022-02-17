import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from 'src/cats/models/post.entity';
import { Dogs } from 'src/dogs/models/post.entity';


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            // database: process.env.POSTGRES_DATABASE,
            autoLoadEntities: true,
            synchronize: true,
            entities: [Dogs, Cats]

        }),
    ],
})
export class DbModule {}
