import { PartialType } from '@nestjs/mapped-types';
import { CreateLatihanDto } from './create-latihan.dto.js';

export class UpdateLatihanDto extends PartialType(CreateLatihanDto) {}
