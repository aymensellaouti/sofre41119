import { Pipe, PipeTransform } from '@angular/core';
const defaultImage = 'default.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (!path.trim().length) {
      return defaultImage;
    }
    return path;
  }

}
