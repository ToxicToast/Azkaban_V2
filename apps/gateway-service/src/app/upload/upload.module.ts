import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { HttpModule } from '@nestjs/axios';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { AuthGuard } from '../../guard/auth.guard';
import { GroupsGuard } from '../../guard/groups.guard';
import { OCRController } from './ocr.controller';
import { OCRService } from './ocr.service';

@Module({
  imports: [
    HttpModule,
    MulterModule.register({
      dest: path.join(__dirname, './assets/uploads'),
    }),
    JwtModule,
    ClientsModule.register([
      {
        name: 'AZKABAN_OCR',
        ...clientProvider(Queues.AZKABAN_OCR),
      },
    ]),
  ],
  controllers: [OCRController],
  providers: [AuthGuard, GroupsGuard, OCRService],
})
export class UploadModule {}
