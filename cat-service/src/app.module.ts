import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './common/config';
import { CatModule } from './modules/cat/cat.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URI), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
