import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '../../guard/auth.guard';
import { GroupsGuard } from '../../guard/groups.guard';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ClientRMQ } from '@nestjs/microservices';
import { readFile } from 'fs/promises';
import { InventoryReceipeTopics } from '@azkaban/shared';
import { ReceipeService } from './receipe.service';
import { Groups } from '../../decorator/groups.decorator';

// @ts-ignore
type ExpressMulterFile = Express.Multer.File;

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('upload-receipe')
@Controller('receipe')
export class ReceipeController {
  constructor(private readonly service: ReceipeService) {}

  @Groups('inventory')
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async uploadFileAndPassValidation(@UploadedFile() file: ExpressMulterFile) {
    await this.service.emitOcr(file.path);
    return {
      fileName: file.originalname ?? 'unknown',
      fileType: file.mimetype ?? 'unknown',
      fileSize: file.size ?? 0,
      filePath: file.path ?? '',
    };
  }
}
