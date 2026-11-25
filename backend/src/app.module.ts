import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LatihanModule } from './latihan/latihan.module.js';
import { PrismaModule } from './prisma/prisma.module.js';


@Module({
  imports: [PrismaModule, LatihanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
