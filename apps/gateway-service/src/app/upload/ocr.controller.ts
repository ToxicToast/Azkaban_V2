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

// @ts-expect-error
type ExpressMulterFile = Express.Multer.File;

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('upload-receipe')
@Controller('ocr')
export class OCRController {
  constructor(private readonly service: OCRService) {}

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
