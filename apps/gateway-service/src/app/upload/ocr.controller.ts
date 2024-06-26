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
import { OCRService } from './ocr.service';
import { Groups } from '../../decorator/groups.decorator';
import { AzkabanGroups } from '@azkaban/shared';

// @ts-expect-error This is an Error that should not be possible, but it is... cuz express is a b...
type ExpressMulterFile = Express.Multer.File;

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('upload-receipe')
@Controller('ocr')
export class OCRController {
  constructor(private readonly service: OCRService) {}

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
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
