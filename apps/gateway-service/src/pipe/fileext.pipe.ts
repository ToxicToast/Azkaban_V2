import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileExtentionValidationPipe implements PipeTransform {
  transform(value: File, metadata: ArgumentMetadata) {
    const arrayTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    console.log('value', value);
    console.log('metadata', metadata);
    return arrayTypes.includes(value.type);
  }
}
