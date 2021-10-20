import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if (!value){
      return 'cv.jpg';
    } else {
      return value ;
    }
  }

}
