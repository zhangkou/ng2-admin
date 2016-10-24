import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BaMask',
  pure: false
})
export class BaMask implements PipeTransform {
  transform(data: Array<string>, mask: string): Array<any> {
    return Array.isArray(data) && data.filter(chunk => chunk.includes(mask));
  }
}
