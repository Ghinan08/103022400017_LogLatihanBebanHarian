import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { LatihanService } from './latihan.service.js';

@Controller('latihan')
export class LatihanController {
  constructor(private readonly latihanService: LatihanService) {}

  @Post() create(@Body() dto: any) { return this.latihanService.create(dto); }

  @Get('statistik')
  statistik() { return this.latihanService.statistik(); }

  @Get()
  findAll(@Query('target') target?: string) {
    return this.latihanService.findByTarget(target);
  }

  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.latihanService.findOne(id); }
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) { return this.latihanService.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) { return this.latihanService.remove(id); }
}