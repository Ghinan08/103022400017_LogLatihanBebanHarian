import { Module } from '@nestjs/common';
import { LatihanService } from './latihan.service.js';
import { LatihanController } from './latihan.controller.js';

@Module({
  controllers: [LatihanController],
  providers: [LatihanService],
})
export class LatihanModule {}
