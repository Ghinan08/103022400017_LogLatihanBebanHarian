import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class LatihanService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.latihan.findMany({ orderBy: { id: 'asc' } });
  }

  async findOne(id: number) {
    const item = await this.prisma.latihan.findUnique({ where: { id } });
    if (!item) throw new NotFoundException(`Latihan ${id} tidak ditemukan`);
    return item;
  }

  create(dto: any) {
    return this.prisma.latihan.create({
      data: { nama: dto.nama, target: dto.target, set: Number(dto.set) },
    });
  }

  async update(id: number, dto: any) {
    await this.findOne(id);
    return this.prisma.latihan.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.latihan.delete({ where: { id } });
  }

  findByTarget(target?: string) {
  return this.prisma.latihan.findMany({
    where: target ? { target: { contains: target, mode: 'insensitive' } } : {},
    orderBy: { id: 'asc' },
  });
}

async statistik() {
  const hasil = await this.prisma.latihan.aggregate({
    _count: { id: true },
    _sum: { set: true },
  });
  return { variasiGerakan: hasil._count.id, totalSet: hasil._sum.set ?? 0 };
}
}