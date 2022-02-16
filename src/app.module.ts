import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CatsModule } from './cats/cats.module';


@Module({
  imports: [DbModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
