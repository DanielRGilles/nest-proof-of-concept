import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';


@Module({
  imports: [DbModule, CatsModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
